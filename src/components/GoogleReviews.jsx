import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  MONTEO_GOOGLE_MAPS_PROFILE_URL,
  MONTEO_MAPS_CENTER,
  MONTEO_PLACE_TEXT_QUERY
} from '../config/monteoGooglePlace';
import './GoogleReviews.css';

const GOOGLE_LOGO_SRC =
  'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png';

async function searchMonteoPlaceId(apiKey) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName'
    },
    body: JSON.stringify({
      textQuery: MONTEO_PLACE_TEXT_QUERY,
      languageCode: 'pt-BR',
      regionCode: 'BR',
      locationBias: {
        circle: {
          center: {
            latitude: MONTEO_MAPS_CENTER.latitude,
            longitude: MONTEO_MAPS_CENTER.longitude
          },
          radius: 2000
        }
      }
    })
  });
  if (!res.ok) return null;
  const data = await res.json();
  const first = data.places?.[0];
  if (!first?.id) return null;
  return String(first.id).replace(/^places\//, '');
}

async function fetchPlaceDetails(apiKey, placeResource) {
  const id = String(placeResource).replace(/^places\//, '');
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(id)}`;
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask':
        'rating,userRatingCount,reviews,reviews.authorAttribution,reviews.rating,reviews.text,reviews.publishTime'
    }
  });
  if (!res.ok) return null;
  return res.json();
}

function reviewBody(review) {
  if (!review?.text) return '';
  if (typeof review.text === 'string') return review.text;
  return review.text?.text ?? '';
}

function authorName(review) {
  return review?.authorAttribution?.displayName?.trim() || 'Cliente Google';
}

function authorPhoto(review) {
  return review?.authorAttribution?.photoUri || null;
}

function authorUri(review) {
  return review?.authorAttribution?.uri || null;
}

function formatReviewDate(review) {
  const raw = review?.publishTime;
  if (!raw) return '';
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
}

function ratingLabel(rating) {
  if (rating == null) return 'AVALIAÇÕES';
  if (rating >= 4.7) return 'EXCELENTE';
  if (rating >= 4.2) return 'MUITO BOM';
  if (rating >= 3.5) return 'BOM';
  return 'GOOGLE';
}

/** Até 19 cards de comentário + 1 slide “Ver todas” (máx. 20 itens no carrossel). */
const MAX_REVIEW_CARDS = 19;

const GoogleReviews = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const [state, setState] = useState(() =>
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      ? { status: 'idle', payload: null }
      : { status: 'fallback', payload: null }
  );
  const [slideIndex, setSlideIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardW, setCardW] = useState(0);
  const [mapsModalOpen, setMapsModalOpen] = useState(false);
  const gap = 16;

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const mq2 = window.matchMedia('(max-width: 1100px)');
    const apply = () => {
      if (mq.matches) setVisibleCards(1);
      else if (mq2.matches) setVisibleCards(2);
      else setVisibleCards(3);
    };
    apply();
    mq.addEventListener('change', apply);
    mq2.addEventListener('change', apply);
    return () => {
      mq.removeEventListener('change', apply);
      mq2.removeEventListener('change', apply);
    };
  }, []);

  useEffect(() => {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!key) return undefined;

    const el = sectionRef.current;
    if (!el) return undefined;

    let cancelled = false;

    const load = async () => {
      setState({ status: 'loading', payload: null });
      try {
        let placeResource = import.meta.env.VITE_GOOGLE_PLACE_ID
          ? String(import.meta.env.VITE_GOOGLE_PLACE_ID).replace(/^places\//, '')
          : null;

        if (!placeResource) {
          placeResource = await searchMonteoPlaceId(key);
        }
        if (!placeResource) {
          throw new Error('place not found');
        }

        let data = await fetchPlaceDetails(key, placeResource);
        if (!data) {
          const alt = await searchMonteoPlaceId(key);
          if (alt && alt !== placeResource) {
            data = await fetchPlaceDetails(key, alt);
          }
        }
        if (!data) throw new Error('details failed');

        if (cancelled) return;
        const reviews = Array.isArray(data.reviews) ? data.reviews.slice(0, 20) : [];
        setState({
          status: 'ready',
          payload: {
            rating: typeof data.rating === 'number' ? data.rating : null,
            userRatingCount:
              typeof data.userRatingCount === 'number' ? data.userRatingCount : null,
            reviews
          }
        });
        setSlideIndex(0);
      } catch {
        if (!cancelled) setState({ status: 'error', payload: null });
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        load();
      },
      { rootMargin: '120px', threshold: 0.06 }
    );

    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, []);

  const { status, payload } = state;
  const reviews = payload?.reviews ?? [];
  const reviewCards = reviews.slice(0, MAX_REVIEW_CARDS);
  const slides =
    reviewCards.length > 0 ? [...reviewCards, { kind: 'cta', id: 'ver-todos' }] : [];
  const maxSlide = Math.max(0, slides.length - visibleCards);

  useEffect(() => {
    setSlideIndex((i) => Math.min(i, maxSlide));
  }, [maxSlide, visibleCards]);

  useEffect(() => {
    if (!mapsModalOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMapsModalOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [mapsModalOpen]);

  useLayoutEffect(() => {
    const vp = viewportRef.current;
    if (!vp || slides.length === 0) {
      setCardW(0);
      return undefined;
    }
    const measure = () => {
      const inner = vp.clientWidth;
      if (inner <= 0) return;
      const w = (inner - gap * (visibleCards - 1)) / visibleCards;
      setCardW(Math.max(200, Math.floor(w)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(vp);
    return () => ro.disconnect();
  }, [slides.length, visibleCards, status]);

  const goPrev = useCallback(() => {
    setSlideIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setSlideIndex((i) => Math.min(maxSlide, i + 1));
  }, [maxSlide]);

  const rating = payload?.rating ?? null;
  const count = payload?.userRatingCount ?? null;
  /** Largura efetiva do card até o primeiro measure (evita carrossel “travado” um frame). */
  const cw = Math.max(cardW || 280, 200);
  const stride = cw + gap;
  const trackWidth = slides.length * cw + Math.max(0, slides.length - 1) * gap;

  return (
    <>
    <section className="google-reviews mesh-bg" ref={sectionRef} aria-labelledby="google-reviews-heading">
      <div className="container">
        <div className="google-reviews-section-header section-header">
          <span className="label">Avaliações google</span>
          <h2 id="google-reviews-heading" className="title">
            Como avaliam a Monteo?
          </h2>
        </div>

        <div className="google-reviews-board glass-card">
          <aside className="google-reviews-sidebar" aria-label="Resumo das avaliações">
            <p className="google-reviews-excellent">{ratingLabel(rating)}</p>
            <div className="google-reviews-big-stars" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <span
                  key={i}
                  className={`google-reviews-big-star${rating != null && rating >= i - 0.35 ? ' is-on' : ''}`}
                >
                  ★
                </span>
              ))}
            </div>
            {count != null && (
              <p className="google-reviews-based">
                Com base em <strong>{count.toLocaleString('pt-BR')}</strong> avaliações
              </p>
            )}
            {count == null && status !== 'ready' && (
              <p className="google-reviews-based google-reviews-based--muted">
                Avaliações públicas no Google
              </p>
            )}
            <a
              className="google-reviews-google-mark"
              href={MONTEO_GOOGLE_MAPS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir avaliações no Google"
            >
              <img
                src={GOOGLE_LOGO_SRC}
                alt=""
                width={108}
                height={36}
                className="google-reviews-google-img"
                loading="lazy"
              />
            </a>
          </aside>

          <div className="google-reviews-carousel-shell">
            {status === 'loading' && (
              <p className="google-reviews-carousel-status" role="status">
                Carregando avaliações…
              </p>
            )}

            {(status === 'error' || status === 'fallback') && reviews.length === 0 && (
              <p className="google-reviews-carousel-status">
                {status === 'error'
                  ? 'Não foi possível carregar as avaliações (chave, APIs ativas ou cota). Confira o Google Cloud ou abra o perfil pelo logo ao lado.'
                  : 'Crie um arquivo .env na raiz com VITE_GOOGLE_MAPS_API_KEY=sua_chave e reinicie o servidor. O Place ID é opcional: usamos o perfil da Monteo no Maps (Londrina) automaticamente.'}
              </p>
            )}

            {slides.length > 0 && (
              <>
                <button
                  type="button"
                  className="google-reviews-nav google-reviews-nav--prev"
                  onClick={goPrev}
                  disabled={slideIndex <= 0}
                  aria-label="Avaliações anteriores"
                >
                  ‹
                </button>
                <div className="google-reviews-viewport" ref={viewportRef}>
                  <ul
                    className="google-reviews-track"
                    style={{
                      width: trackWidth,
                      transform: `translate3d(-${slideIndex * stride}px, 0, 0)`
                    }}
                  >
                    {slides.map((slide, idx) => {
                      if (slide.kind === 'cta') {
                        return (
                          <li
                            key={slide.id}
                            className="google-reviews-slide"
                            style={{ width: cw, marginRight: idx < slides.length - 1 ? gap : 0 }}
                          >
                            <article className="google-review-tile google-review-tile--cta">
                              <h3 className="google-review-cta-title">Ver todas as avaliações</h3>
                              <p className="google-review-cta-text">
                                Abra o perfil da Monteo no Google (Maps / Meu Negócio) para ver todas as
                                avaliações e informações do estabelecimento.
                              </p>
                              <button
                                type="button"
                                className="google-review-cta-btn"
                                onClick={() => setMapsModalOpen(true)}
                              >
                                Ver todas
                              </button>
                            </article>
                          </li>
                        );
                      }

                      const rev = slide;
                      const text = reviewBody(rev);
                      const excerpt = text.length > 200 ? `${text.slice(0, 200).trim()}…` : text;
                      const name = authorName(rev);
                      const photo = authorPhoto(rev);
                      const uri = authorUri(rev);
                      const dateStr = formatReviewDate(rev);
                      const r = typeof rev.rating === 'number' ? rev.rating : rating ?? 5;

                      return (
                        <li
                          key={`${name}-${idx}`}
                          className="google-reviews-slide"
                          style={{ width: cw, marginRight: idx < slides.length - 1 ? gap : 0 }}
                        >
                          <article className="google-review-tile">
                            <header className="google-review-tile-head">
                              <div className="google-review-avatar-wrap">
                                {photo ? (
                                  <img
                                    src={photo}
                                    alt=""
                                    className="google-review-avatar"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <span className="google-review-avatar-fallback" aria-hidden>
                                    {name.slice(0, 1).toUpperCase()}
                                  </span>
                                )}
                              </div>
                              <div className="google-review-tile-meta">
                                {uri ? (
                                  <a
                                    href={uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="google-review-name"
                                  >
                                    {name}
                                  </a>
                                ) : (
                                  <span className="google-review-name">{name}</span>
                                )}
                                {dateStr && <time className="google-review-date">{dateStr}</time>}
                              </div>
                              <span className="google-review-g-icon" aria-hidden>
                                G
                              </span>
                            </header>
                            <div className="google-review-tile-rating">
                              <span className="google-review-mini-stars" aria-label={`${r} de 5`}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                  <span key={i} className={r >= i - 0.25 ? 'is-on' : ''}>
                                    ★
                                  </span>
                                ))}
                              </span>
                              <VerifiedBadge />
                            </div>
                            <blockquote className="google-review-tile-text">{excerpt}</blockquote>
                          </article>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button
                  type="button"
                  className="google-reviews-nav google-reviews-nav--next"
                  onClick={goNext}
                  disabled={slideIndex >= maxSlide}
                  aria-label="Próximas avaliações"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>

    {mapsModalOpen &&
      createPortal(
        <div className="google-reviews-modal" role="dialog" aria-modal="true" aria-labelledby="gmaps-modal-title">
          <button
            type="button"
            className="google-reviews-modal-backdrop"
            aria-label="Fechar"
            onClick={() => setMapsModalOpen(false)}
          />
          <div className="google-reviews-modal-panel">
            <h3 id="gmaps-modal-title">Monteo no Google</h3>
            <p>
              No Google Maps você encontra o perfil completo, horários e todas as avaliações públicas da Monteo
              (Meu Negócio).
            </p>
            <div className="google-reviews-modal-actions">
              <a
                href={MONTEO_GOOGLE_MAPS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir no Google Maps
              </a>
              <button type="button" className="google-reviews-modal-close" onClick={() => setMapsModalOpen(false)}>
                Fechar
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

function VerifiedBadge() {
  return (
    <span className="google-review-verified" title="Avaliação no Google" aria-hidden>
      <svg viewBox="0 0 24 24" className="google-review-verified-svg">
        <path
          fill="#1a73e8"
          d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 16l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
        />
      </svg>
    </span>
  );
}

export default GoogleReviews;
