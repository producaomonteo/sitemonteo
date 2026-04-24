import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const images = [
    '/src/assets/images/Eduardo e Evelyn.JPG',
    '/src/assets/images/Eduardo Sentado.JPG',
    '/src/assets/images/Eduardo em pé.JPG',
    '/src/assets/images/Eduardo Sério frente.JPG',
    '/src/assets/images/Eduardo Sério editado inteiro.JPG',
    '/src/assets/images/Eduardo Sério Editado.JPG'
  ];

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">TIME & ESTRUTURA</span>
          <h2 className="title">Pessoas que constroem a Monteo.</h2>
          <p className="subtitle">Fotos reais do nosso escritório, equipe e eventos.</p>
        </div>
        <div className="team-gallery">
          {images.map((img, i) => (
            <div key={i} className="team-img-card reveal-up active" style={{ transitionDelay: `${i * 100}ms` }}>
              <img src={img} alt={`Time Monteo ${i}`} className="team-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
