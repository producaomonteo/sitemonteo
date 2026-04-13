import React from 'react';
import logoExame from '@Imagens/Logo-Exame.svg';
import logoValor from '@Imagens/Logo-Valor-Economico.svg';
import logoInfomoney from '@Imagens/Logo-Info-Money.svg';
import logoTerra from '@Imagens/Logo Terra (1).svg';
import logoEstadao from '@Imagens/Logo-Estadao.svg';
import './MediaSection.css';

const mediaLogos = [
  { alt: 'Exame', src: logoExame },
  { alt: 'Valor Econômico', src: logoValor },
  { alt: 'InfoMoney', src: logoInfomoney },
  { alt: 'Terra', src: logoTerra },
  { alt: 'Estadão', src: logoEstadao }
];

const MediaSection = () => {
  return (
    <section className="media-section glass-card">
      <div className="container">
        <span className="info-label">MONTEO NA MÍDIA</span>
        <div className="logos-wrapper">
          {mediaLogos.map((logo) => (
            <div key={logo.alt} className="media-logo-item">
              <img
                className="media-logo-img"
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
