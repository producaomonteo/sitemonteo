import React from 'react';
import logoTerra from '@Imagens/Logo Terra (1).svg';
import './MediaSection.css';

const mediaLogos = [
  {
    alt: 'Terra',
    src: logoTerra,
    href: 'https://www.google.com/search?q=monteo+recebe+selo+gptw+terra'
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
