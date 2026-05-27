import React from 'react';
import logoTerra from '@Imagens/Logo Terra (1).svg';
import './MediaSection.css';

// Adicione aqui outros veículos conforme Fernando confirmar, com a URL da matéria
const mediaLogos = [
  {
    alt: 'Terra',
    src: logoTerra,
    href: 'https://www.terra.com.br'  // Substituir pela URL real da matéria
  }
];

const MediaSection = () => {
  return (
    <section className="media-section glass-card">
      <div className="container">
        <span className="info-label">MONTEO NA MÍDIA</span>
        <div className="logos-wrapper">
          {mediaLogos.map((logo) => (
            <div key={logo.alt} className="media-logo-item">
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-logo-link"
                  aria-label={`Ver matéria no ${logo.alt}`}
                >
                  <img
                    className="media-logo-img"
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ) : (
                <img
                  className="media-logo-img"
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
