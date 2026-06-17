import React from 'react';
import logoMonteocast from '../assets/images/logo-monteocast.png';
import './PodcastSection.css';

const PLAYLIST_URL = 'https://www.youtube.com/watch?v=IV3lCd98ZYE&list=PLVU13ZzvmqTz4hymX_FdcQUmEDDr1bCPG&index=16';
const COVER_YOUTUBE_ID = 'IV3lCd98ZYE';

const PodcastSection = () => {
  return (
    <section className="podcast-section mesh-bg">
      <div className="container">
        <div className="section-header reveal-up active" style={{marginBottom: '64px'}}>
          <span className="label">CONTEÚDO</span>
          <h2 className="title">Podcast</h2>
        </div>
        <div className="podcast-layout">

          {/* Esquerda — Logo */}
          <div className="podcast-left">
            <img src={logoMonteocast} alt="Monteo Cast" className="podcast-logo" />
            <p className="podcast-desc">Conteúdo estratégico para quem quer entender e dominar as estratégias através de consórcios.</p>
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="podcast-youtube-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Ver canal no YouTube
            </a>
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
