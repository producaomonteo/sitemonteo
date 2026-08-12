import React from 'react';
import fotoFundadores from '@Imagens/foto-fundadores.webp';
import './FundadoresSection.css';

const selos = [
  'Autores pela Alta Books',
  'Hosts do Receita de Sucesso Podcast',
];

const FundadoresSection = () => {
  return (
    <section className="fundadores-section">
      <div className="container">
        <div className="fundadores-grid">
          <span className="label fundadores-label-top">OS FUNDADORES</span>
          <div className="fundadores-media">
            <img
              src={fotoFundadores}
              alt="Juciel Oliveira e Karen Hasse, fundadores da Monteo"
              className="fundadores-foto"
            />
            <span className="fundadores-legenda">
              Juciel Oliveira &amp; Karen Hasse — Fundadores
            </span>
          </div>

          <div className="fundadores-content">
            <span className="label fundadores-label">OS FUNDADORES</span>
            <h2 className="fundadores-title">Quem está por trás da Monteo</h2>

            <div className="fundadores-text">
              <p>
                <strong>Juciel Oliveira</strong> e <strong>Karen Hasse</strong>{' '}
                fundaram a Monteo com um objetivo claro: transformar o consórcio
                em uma ferramenta de construção patrimonial e criar um ecossistema
                capaz de acelerar clientes, empresas e profissionais do mercado.
              </p>
              <p>
                Hoje, a Monteo conecta clientes, parceiros e empresas em um dos
                ecossistemas que mais cresce no mercado brasileiro de consórcios.
              </p>
            </div>

            <ul className="fundadores-selos">
              {selos.map((selo) => (
                <li key={selo} className="fundadores-selo">
                  {selo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundadoresSection;
