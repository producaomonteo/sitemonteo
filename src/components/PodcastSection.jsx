import React from 'react';
import './PodcastSection.css';

// Canal do YouTube do Monteo Cast
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@monteo';

// Thumbnail do canal/playlist - usando ID do último episódio publicado
const COVER_YOUTUBE_ID = 'kuKwVQQgCGg';

const PodcastSection = () => {
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

        <div className="podcast-cover-wrap">
          <a
            href={YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="podcast-cover-link"
            aria-label="Assistir Monteo Cast no YouTube"
          >
            <div className="podcast-cover-thumb-wrap">
              <img
                src={`https://img.youtube.com/vi/${COVER_YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Monteo Cast - Podcast no YouTube"
                className="podcast-cover-thumb"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${COVER_YOUTUBE_ID}/hqdefault.jpg`;
                }}
              />
              <div className="podcast-cover-overlay">
                <div className="podcast-cover-play">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="podcast-cover-cta">
                  <span className="podcast-cover-badge">Monteo Cast</span>
                  <span className="podcast-cover-action">Ver todos os episódios no YouTube →</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
