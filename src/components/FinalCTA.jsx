import React from 'react';
import './FinalCTA.css';
const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="container cta-container">
        <div className="cta-header reveal-up active">
          <span className="label">O SEU PRÓXIMO PASSO</span>
          <h2 className="title">Qual é o seu próximo passo dentro da Monteo?</h2>
          <p className="subtitle">Escolha sua porta de entrada e comece a transformar sua operação hoje mesmo.</p>
        </div>
        <div className="cta-grid">
          <button className="btn btn-primary cta-btn">CLIENTE</button>
          <button className="btn btn-outline cta-btn">FRANQUEADO</button>
          <button className="btn btn-outline cta-btn">PARCEIRO</button>
          <button className="btn btn-outline cta-btn">PROFISSIONAL</button>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
