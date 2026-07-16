import React from 'react';
import fotoFundadores from '@Imagens/foto-fundadores.webp';
import './FundadoresSection.css';

const selos = [
  'Autor Alta Books',
  'Hosts do Receita de Sucesso Podcast',
  '+15 anos de atuação',
  'Great Place To Work',
];

const FundadoresSection = () => {
  return (
    <section className="fundadores-section">
      <div className="container">
        <div className="fundadores-grid">
          <div className="fundadores-media">
            <img
              src={fotoFundadores}
              alt="Juciel Oliveira e Karen Oliveira, fundadores da Monteo"
              className="fundadores-foto"
            />
            <span className="fundadores-legenda">
              Juciel Oliveira &amp; Karen Oliveira — Fundadores
            </span>
          </div>

          <div className="fundadores-content">
            <span className="label fundadores-label">OS FUNDADORES</span>
            <h2 className="fundadores-title">Quem está por trás da Monteo</h2>

            <div className="fundadores-text">
              <p>
                A Monteo nasceu da convicção de que patrimônio não deve depender
                apenas do tempo, mas de estratégia.
              </p>
              <p>
                Foi com essa visão que <strong>Juciel Oliveira</strong> e{' '}
                <strong>Karen Oliveira</strong> fundaram a Monteo, com o propósito
                de construir um ecossistema capaz de acelerar o crescimento
                patrimonial de clientes e impulsionar o crescimento de empresas e
                profissionais do mercado de consórcios.
              </p>
              <p>
                Hoje, a Monteo conecta clientes, parceiros e empresas em um dos
                ecossistemas que mais cresce no mercado brasileiro de consórcios.
              </p>
            </div>
          </div>
        </div>

        <ul className="fundadores-selos">
          {selos.map((selo) => (
            <li key={selo} className="fundadores-selo">
              {selo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FundadoresSection;
