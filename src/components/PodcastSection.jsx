import React from 'react';
import logoMonteocast from '../assets/images/logo-monteocast.png';
import './PodcastSection.css';

const PLAYLIST_URL = 'https://www.youtube.com/watch?v=IV3lCd98ZYE&list=PLVU13ZzvmqTz4hymX_FdcQUmEDDr1bCPG&index=16';
const COVER_YOUTUBE_ID = 'IV3lCd98ZYE';

const PodcastSection = () => {
  return (
    <section className="podcast-section mesh-bg">
      <div className="container">
        <div className="podcast-layout">

          {/* Esquerda — Logo */}
          <div className="podcast-left">
            <img src={logoMonteocast} alt="Monteo Cast" className="podcast-logo" />
            <p className="podcast-desc">Conteúdo estratégico para quem quer entender e dominar o mercado de consórcios.</p>
          </div>

          {/* Direita — Capa do episódio */}
          <div className="podcast-right">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-cover-link"
              aria-label="Ver todos os episódios do Monteo Cast no YouTube"
            >
              <div className="podcast-thumb-wrap">
                <img
                  src={`https://img.youtube.com/vi/${COVER_YOUTUBE_ID}/maxresdefault.jpg`}
                  alt="Monteo Cast no YouTube"
                  className="podcast-thumb"
                  onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${COVER_YOUTUBE_ID}/hqdefault.jpg`; }}
                />
                <div className="podcast-play-overlay">
                  <div className="podcast-play-btn">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="podcast-play-label">Ver todos os episódios no YouTube →</span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
