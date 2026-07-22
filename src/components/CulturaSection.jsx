import React from 'react';
import equipeMonteo from '@Imagens/equipe-monteo.webp';
import './CulturaSection.css';

const pilares = [
  'Cultura de Alta Performance',
  'Desenvolvimento Contínuo',
  'Pessoas comprometidas com resultados',
];

const CulturaSection = () => {
  return (
    <section className="cultura-section">
      <div className="container cultura-grid">
        <div className="cultura-content">
          <span className="label cultura-label">CULTURA</span>
          <h2 className="cultura-title">Uma cultura que sustenta o crescimento.</h2>
          <p className="cultura-subtitle">
            Empresas extraordinárias são construídas por pessoas extraordinárias. Por
            isso investimos continuamente em cultura, desenvolvimento e excelência,
            criando um ambiente preparado para sustentar o crescimento do Ecossistema
            Monteo.
          </p>
          <p className="cultura-text">
            Na Monteo acreditamos que resultados consistentes são consequência de uma
            cultura forte. Construímos um ambiente baseado em confiança, excelência,
            desenvolvimento contínuo e compromisso com o cliente. É essa cultura que
            sustenta o crescimento do nosso ecossistema e nos permite gerar valor para
            clientes, parceiros e profissionais em todo o Brasil.
          </p>

          <ul className="cultura-pilares">
            {pilares.map((pilar) => (
              <li key={pilar} className="cultura-pilar">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {pilar}
              </li>
            ))}
          </ul>
        </div>

        <div className="cultura-media">
          <img src={equipeMonteo} alt="Equipe Monteo" className="cultura-photo" />
        </div>
      </div>
    </section>
  );
};

export default CulturaSection;
