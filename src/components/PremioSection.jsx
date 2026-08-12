import React from 'react';
import premioFoto from '../assets/images/premio-real-estate.webp';
import './PremioSection.css';

const PremioSection = () => {
  return (
    <section className="premio-section">
      <div className="container premio-grid">
        <div className="premio-content">
          <span className="premio-ano">Real Estate Awards 2026</span>
          <h2 className="premio-title">
            Eleita a Melhor Empresa de Consórcio Imobiliário do Brasil
          </h2>
          <p className="premio-text">
            A Monteo foi reconhecida no Real Estate Awards 2026 como a Melhor Empresa
            de Consórcio Imobiliário do Brasil.
          </p>
          <p className="premio-subtext">
            Um reconhecimento que celebra não apenas nossos resultados, mas a história
            construída por nosso time, clientes e parceiros.
          </p>
        </div>

        <div className="premio-media">
          <img
            src={premioFoto}
            alt="Monteo recebendo o prêmio de Melhor Empresa de Consórcio Imobiliário do Brasil no Real Estate Awards 2026"
            className="premio-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default PremioSection;
