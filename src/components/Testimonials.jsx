import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Dr. Carlos Manfrim',
    role: 'CIRURGIÃO PLÁSTICO',
    youtubeId: 'GNMk80NnMfw'
  },
  {
    name: 'Julian Tonioli',
    role: 'MENTOR DE EMPRESÁRIOS',
    youtubeId: 'xB6GNyK3-JA'
  },
  {
    name: 'Thiago Reis',
    role: 'MENTOR DE VENDAS',
    youtubeId: '58oqsfJGQbQ'
  }
];

const thumbUrl = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const Testimonials = () => {
  const [activeYoutubeId, setActiveYoutubeId] = useState(null);

  useEffect(() => {
    if (!activeYoutubeId) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveYoutubeId(null);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeYoutubeId]);

  return (
    <section className="testimonials mesh-bg">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">HISTÓRIAS REAIS</span>
          <h2 className="title">Resultados que inspiram.</h2>
        </div>

        <div className="video-grid">
          {testimonials.map((testi, i) => (
            <div
              key={testi.youtubeId}
              className="video-card reveal-up active"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <button
                type="button"
                className="video-card-trigger"
                onClick={() => setActiveYoutubeId(testi.youtubeId)}
                aria-label={`Assistir depoimento de ${testi.name}`}
              >
                <div className="video-thumb-wrapper">
                  <img
                    src={thumbUrl(testi.youtubeId)}
                    alt=""
                    className="video-thumb"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${testi.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
                <div className="video-info">
                  <span className="info-role">{testi.role}</span>
                  <h3 className="info-name">{testi.name}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeYoutubeId &&
        createPortal(
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Vídeo do depoimento"
          >
            <button
              type="button"
              className="video-modal-backdrop"
              aria-label="Fechar vídeo"
              onClick={() => setActiveYoutubeId(null)}
            />
            <div className="video-modal-content">
              <button
                type="button"
                className="video-modal-close"
                aria-label="Fechar"
                onClick={() => setActiveYoutubeId(null)}
              >
                ×
              </button>
              <div className="video-modal-iframe-wrap">
                <iframe
                  title="Depoimento em vídeo"
                  src={`https://www.youtube.com/embed/${activeYoutubeId}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Testimonials;
