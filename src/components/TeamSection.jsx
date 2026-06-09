import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/images/recepcao-monteo-1.webp';
import img2 from '../assets/images/recepcao-monteo-2.webp';
import img3 from '../assets/images/recepcao-monteo-3.webp';
import img4 from '../assets/images/recepcao-monteo-4.webp';
import img5 from '../assets/images/foto-premiacao.png';
import img6 from '../assets/images/foto-treinamento.png';
import img7 from '../assets/images/foto-convencao.png';
import './TeamSection.css';

const images = [
  { src: img1, alt: 'Escritório Monteo - Recepção' },
  { src: img2, alt: 'Escritório Monteo - Ambiente' },
  { src: img3, alt: 'Escritório Monteo - Equipe' },
  { src: img4, alt: 'Escritório Monteo - Estrutura' },
  { src: img5, alt: 'Monteo - Premiação' },
  { src: img6, alt: 'Monteo - Treinamento' },
  { src: img7, alt: 'Monteo - Convenção' }
];

const AUTOPLAY_INTERVAL = 4000;

const TeamSection = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setCurrent((idx + images.length) % images.length);
  };

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, []);

  // Reset timer on manual nav
  const manualNav = (idx) => {
    clearInterval(timerRef.current);
    goTo(idx);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, AUTOPLAY_INTERVAL);
  };

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">TIME & ESTRUTURA</span>
          <h2 className="title">Pessoas que constroem a Monteo.</h2>
          <p className="subtitle">Fotos reais do nosso escritório, equipe e eventos.</p>
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
            onClick={() => manualNav(current - 1)}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="team-carousel-btn team-carousel-btn--next"
            onClick={() => manualNav(current + 1)}
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
                onClick={() => manualNav(i)}
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
