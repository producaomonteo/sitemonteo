import React from 'react';
import logoTerra from '@Imagens/Logo Terra (1).svg';
import logoIstoe from '../assets/images/logo-istoe.png';
import logoBand from '../assets/images/logo-band.png';
import './MediaSection.css';

const mediaLogos = [
  {
    alt: 'Terra',
    src: logoTerra,
    href: 'https://www.terra.com.br/economia/monteo-recebe-selo-gptw-e-aposta-em-cultura-participativa,abd56ed14164fca8f638488ae8dd81d9xpv34kad.html'
  },
  {
    alt: 'Istoé',
    src: logoIstoe,
    href: 'https://istoe.com.br/consorcio-imobiliario-cresce-como-estrategia-de-investimento'
  },
  {
    alt: 'Band',
    src: logoBand,
    href: 'https://www.band.com.br/economia/noticias/regra-dos-2-especialista-ensina-como-organizar-contas-para-viver-de-renda-202601301343'
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
