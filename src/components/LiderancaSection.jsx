import React from 'react';
import './LiderancaSection.css';

const LiderancaSection = () => {
  return (
    <section className="lideranca-section">
      <div className="container">
        <span className="label lideranca-label">LIDERANÇA</span>
        <h2 className="lideranca-title">
          Liderando a transformação do mercado.
        </h2>
        <p className="lideranca-text">
          A Monteo deixou de ser apenas uma empresa de consórcios. Hoje conecta
          clientes, franqueados, parceiros estratégicos e profissionais do mercado
          em um ecossistema que movimenta{' '}
          <strong>mais de R$&nbsp;1 bilhão em negócios por ano</strong> e ajuda a
          transformar patrimônio em escala.
        </p>
      </div>
    </section>
  );
};

export default LiderancaSection;
