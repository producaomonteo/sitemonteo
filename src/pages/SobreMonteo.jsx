import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageHero.css';
import './SobreMonteo.css';

const SobreMonteo = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero page-hero--sobre">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Sobre a Monteo</span>
            <h1 className="page-hero-title">Uma empresa construída<br />para durar gerações.</h1>
          </div>
        </section>

        {/* HISTÓRIA */}
        <section className="page-section">
          <div className="container sobre-historia">
            <span className="label section-label">Nossa história</span>
            <div className="historia-content">
              <h2 className="section-title historia-title">15 anos transformando<br />o mercado de consórcios.</h2>
              <div className="historia-text">
                <p>A Monteo nasceu da visão de que o consórcio, quando bem estruturado, é uma das ferramentas mais poderosas de construção de patrimônio. Em 15 anos de atuação, evoluímos de uma operação local para um ecossistema completo que conecta clientes, franqueados, parceiros e profissionais do setor.</p>
                <p>Hoje, com mais de R$ 1,5 bilhão em cartas de crédito sob assessoria e 3.500 clientes atendidos, somos reconhecidos como referência em estrutura, método e estratégia no mercado de consórcios brasileiro.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NÚMEROS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">Autoridade em números</span>
            <div className="proof-row proof-row--4">
              <div className="proof-block">
                <span className="proof-num">R$ 1,5 Bi</span>
                <span className="proof-desc">em cartas sob assessoria</span>
              </div>
              <div className="proof-block">
                <span className="proof-num">3.500</span>
                <span className="proof-desc">clientes atendidos</span>
              </div>
              <div className="proof-block">
                <span className="proof-num">15 anos</span>
                <span className="proof-desc">de atuação</span>
              </div>
              <div className="proof-block">
                <span className="proof-num">GPTW</span>
                <span className="proof-desc">Selo de excelência</span>
              </div>
            </div>
          </div>
        </section>

        {/* MÍDIA */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Monteo na mídia</span>
            <h2 className="section-title">Reconhecida pelo mercado</h2>
            <div className="sobre-midia-logos">
              {['Exame', 'Valor Econômico', 'InfoMoney', 'Terra', 'Estadão', 'IstoÉ', 'UOL'].map(m => (
                <div key={m} className="sobre-midia-item glass-card">
                  <span className="sobre-midia-name">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-section page-section--alt sobre-cta-section">
          <div className="container sobre-cta">
            <h2 className="section-title">Faça parte do ecossistema</h2>
            <p className="sobre-cta-sub">Seja como cliente, franqueado, parceiro ou profissional — há um caminho Monteo para você.</p>
            <div className="sobre-cta-btns">
              <a href="/cliente" className="btn btn-primary">Sou cliente</a>
              <a href="/seja-franqueado" className="btn btn-outline">Quero ser franqueado</a>
              <a href="/seja-parceiro" className="btn btn-outline">Quero ser parceiro</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SobreMonteo;
