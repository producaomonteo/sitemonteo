import React, { useState } from 'react';
import img1 from '../assets/images/recepcao-monteo-2.webp';
import img2 from '../assets/images/escritorio-1.webp';
import img3 from '../assets/images/escritorio-2.webp';
import img4 from '../assets/images/escritorio-3.webp';
import img5 from '../assets/images/escritorio-4.webp';
import img6 from '../assets/images/escritorio-5.webp';
import './TeamSection.css';

const images = [
  { src: img1, alt: 'Escritório Monteo - Recepção' },
  { src: img2, alt: 'Escritório Monteo - Hall de entrada' },
  { src: img3, alt: 'Escritório Monteo - Auditório' },
  { src: img4, alt: 'Escritório Monteo - Lounge' },
  { src: img5, alt: 'Escritório Monteo - Corredor' },
  { src: img6, alt: 'Escritório Monteo - Sala de reunião' }
];

const TeamSection = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => {
    setCurrent((idx + images.length) % images.length);
  };

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">ESTRUTURA</span>
          <h2 className="title">Onde grandes decisões patrimoniais ganham estratégia.</h2>
        </div>

        <div className="team-carousel" aria-label="Fotos do escritório Monteo">
          <div className="team-carousel-viewport">
            {images.map((img, i) => (
              <div
                key={i}
                className={`team-carousel-slide${i === current ? ' is-active' : ''}`}
                aria-hidden={i !== current}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="team-carousel-img"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="team-carousel-btn team-carousel-btn--prev"
            onClick={() => goTo(current - 1)}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="team-carousel-btn team-carousel-btn--next"
            onClick={() => goTo(current + 1)}
            aria-label="Próxima foto"
          >
            ›
          </button>

          <div className="team-carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`team-carousel-dot${i === current ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
