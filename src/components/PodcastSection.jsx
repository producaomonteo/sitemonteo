import React, { useEffect, useRef, useState } from 'react';
import './PodcastSection.css';

const EPISODES = [
  {
    id: 'e1',
    youtubeId: '89_4jaPNwxg',
    title: '#01 — FORMAS DE ALAVANCAR COM CONSÓRCIO IMOBILIÁRIO | MONTEO CAST',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Dez 2023'
  },
  {
    id: 'e2',
    youtubeId: 'zyLZoRjiGpc',
    title: '#03 — CONSÓRCIO PARA CONSUMO X CONSÓRCIO PARA INVESTIMENTO | MONTEO CAST',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Jun 2024'
  },
  {
    id: 'e3',
    youtubeId: 'RqOnTSsd6Sg',
    title: '#05 — CONSÓRCIO EM DEBATE: PRÓS, CONTRAS E OBJEÇÕES | MONTEO CAST',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Out 2024'
  },
  {
    id: 'e4',
    youtubeId: 'otdCAB-yPh8',
    title: '#06 — IMÓVEIS: O CÓDIGO DA ALTA RENTABILIDADE | Teo Granado',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Nov 2024'
  },
  {
    id: 'e5',
    youtubeId: 'rfk3PDTMyXQ',
    title: '#07 — FORTUNA INTELIGENTE - CONSÓRCIO E LEILÃO | Dra. Rachel Minicò',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Dez 2024'
  },
  {
    id: 'e6',
    youtubeId: 'op4WJk-Scws',
    title: '#08 — CONSÓRCIO: TURBINE O RETORNO DOS ALUGUÉIS | Barbara Pereira',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Mar 2025'
  },
  {
    id: 'e7',
    youtubeId: '-HyCedJu5Yk',
    title: '#09 — COMO CONSTRUIR COM CONSÓRCIO E ALAVANCAR SEU PATRIMÔNIO | Eduarda Sartor',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Mai 2025'
  },
  {
    id: 'e8',
    youtubeId: 'mCYGHj6zv7o',
    title: '#10 — ERRARAM NO CONSÓRCIO E MOSTRAM COMO EVITAR',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Jul 2025'
  },
  {
    id: 'e9',
    youtubeId: 'kuKwVQQgCGg',
    title: '#14 — O Perigo da Carta Contemplada!',
    subtitle: 'MONTEO CAST · Monteo',
    date: 'Mar 2026'
  }
];

const thumb = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

const PodcastSection = () => {
  const [activeId, setActiveId] = useState(EPISODES[0].id);
  const [listMaxHeight, setListMaxHeight] = useState(null);
  const playerWrapRef = useRef(null);
  const active = EPISODES.find((e) => e.id === activeId) ?? EPISODES[0];

  useEffect(() => {
    const el = playerWrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;

    const mq = window.matchMedia('(min-width: 1025px)');

    const sync = () => {
      if (!mq.matches) {
        setListMaxHeight(null);
        return;
      }
      const h = el.getBoundingClientRect().height;
      setListMaxHeight(h > 64 ? Math.round(h) : null);
    };

    const ro = new ResizeObserver(sync);
    ro.observe(el);
    mq.addEventListener('change', sync);
    sync();

    return () => {
      ro.disconnect();
      mq.removeEventListener('change', sync);
    };
  }, [active.id, active.title]);

  return (
    <section className="podcast-section mesh-bg" aria-labelledby="podcast-heading">
      <div className="container">
        <header className="podcast-intro">
          <span className="podcast-kicker">Monteo Cast</span>
          <h2 id="podcast-heading" className="podcast-title">
            Conteúdo técnico sobre consórcios.
          </h2>
          <p className="podcast-lead">
            Conteúdo estratégico para quem quer entender e dominar o mercado de consórcios.
          </p>
        </header>

        <div className="podcast-shell">
          <div
            className="podcast-list-outer"
            style={listMaxHeight != null ? { maxHeight: listMaxHeight } : undefined}
          >
            <ul className="podcast-list" role="list">
              {EPISODES.map((ep) => {
                const isActive = ep.id === active.id;
                return (
                  <li key={ep.id}>
                    <button
                      type="button"
                      className={`podcast-episode${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveId(ep.id)}
                      aria-current={isActive ? 'true' : undefined}
                      aria-label={`Reproduzir ${ep.title}`}
                    >
                      <span className="podcast-episode-thumb-wrap">
                        <img
                          src={thumb(ep.youtubeId)}
                          alt=""
                          className="podcast-episode-thumb"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`;
                          }}
                        />
                      </span>
                      <span className="podcast-episode-body">
                        <span className="podcast-episode-title">{ep.title}</span>
                        <span className="podcast-episode-meta">
                          {ep.date} · {ep.subtitle}
                        </span>
                      </span>
                      <span className="podcast-episode-play" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="podcast-player-wrap glass-card" ref={playerWrapRef}>
            <div className="podcast-player-chrome">
              <span className="podcast-player-badge">Monteo Cast</span>
              <span className="podcast-player-ep-title">{active.title}</span>
            </div>
            <div className="podcast-player-frame">
              <iframe
                key={active.youtubeId}
                title={active.title}
                src={`https://www.youtube.com/embed/${active.youtubeId}?rel=0`}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
