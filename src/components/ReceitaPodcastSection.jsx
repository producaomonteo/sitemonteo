import React from 'react';
import './ReceitaPodcastSection.css';

const SHOW_URL = 'https://open.spotify.com/show/0sdIxUVCJCCDJhhupdRFW6?si=a8f59b43cdea47dd';

// Imagem de capa do podcast — substitua por lâmina da nova apresentação quando disponível
// Por ora usa a thumbnail de um dos episódios para gerar autoridade
const COVER_EPISODE_ID = '5UX8WsHUusNB1bJdkcbhZ1';

const ReceitaPodcastSection = () => {
  return (
    <section className="receita-podcast-section mesh-bg" aria-labelledby="receita-podcast-heading">
      <div className="container">
        <header className="receita-intro section-header">
          <span className="label">Receita de Sucesso Podcast</span>
          <h2 id="receita-podcast-heading" className="title">
            Nossos fundadores entrevistam alguns dos maiores nomes do empreendedorismo e desenvolvimento pessoal do Brasil.
          </h2>
          <p className="subtitle">
            Histórias de liderança e inovação que inspiram o ecossistema Monteo.
          </p>
        </header>

        <div className="receita-cover-wrap">
          <a
            href={SHOW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="receita-cover-link"
            aria-label="Ouvir Receita de Sucesso no Spotify"
          >
            <div className="receita-cover-thumb-wrap">
              {/* Troque o src abaixo pela lâmina da nova apresentação */}
              <img
                src={`https://i.scdn.co/image/ab6765630000ba8a${COVER_EPISODE_ID}`}
                alt="Receita de Sucesso Podcast"
                className="receita-cover-thumb"
                onError={(e) => {
                  // fallback: imagem genérica do Spotify
                  e.currentTarget.src = 'https://open.spotify.com/favicon.ico';
                  e.currentTarget.style.objectFit = 'contain';
                  e.currentTarget.style.background = '#1DB954';
                  e.currentTarget.style.padding = '40px';
                }}
              />
              <div className="receita-cover-overlay">
                <div className="receita-cover-play">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="receita-cover-cta">
                  <span className="receita-cover-badge">Receita de Sucesso Podcast</span>
                  <span className="receita-cover-action">Ouvir no Spotify →</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReceitaPodcastSection;
