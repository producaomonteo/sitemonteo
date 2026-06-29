import React, { useEffect } from 'react';
import Header from '../components/Header';
import MediaSection from '../components/MediaSection';
import Footer from '../components/Footer';
import ModalCTA from '../components/ModalCTA';
import recepcaoImg from '../assets/images/recepcao-monteo-2.webp';
import './PageHero.css';
import './SobreMonteo.css';

const SobreMonteo = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app sobre-page">
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
        <section className="page-section sobre-historia">
          <div className="container">
            <img
              src={recepcaoImg}
              alt="Entrada da Monteo"
              className="sobre-historia-img"
            />
            <div className="sobre-historia-text">
              <span className="label section-label">Nossa história</span>
              <h2 className="sobre-historia-title">15 anos transformando o mercado de consórcios.</h2>
              <p>A Monteo nasceu da visão de que o consórcio, quando bem estruturado, é uma das ferramentas mais poderosas de construção de patrimônio. Em 15 anos de atuação, evoluímos de uma operação local para um ecossistema completo que conecta clientes, franqueados, parceiros e profissionais do setor.</p>
              <p>Hoje, com mais de R$ 1,5 bilhão em cartas de crédito sob assessoria e 3.500 clientes atendidos, somos reconhecidos como referência em estrutura, método e estratégia no mercado de consórcios brasileiro.</p>
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

        {/* MÍDIA — igual à home (Terra, Istoé, Band) */}
        <MediaSection />

        {/* CTA */}
        <section className="page-section page-section--alt sobre-cta-section">
          <div className="container sobre-cta" style={{textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2 className="section-title" style={{textAlign:'center'}}>Faça parte do ecossistema</h2>
            <p className="sobre-cta-sub">Seja como cliente, franqueado, parceiro ou profissional. Há um caminho Monteo para você.</p>
            <div className="sobre-cta-btns">
              <button type="button" className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'cliente' } }))}>Quero ser cliente</button>
              <button type="button" className="btn btn-outline" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'franqueado' } }))}>Quero ser franqueado</button>
              <button type="button" className="btn btn-outline" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'parceiro' } }))}>Quero ser parceiro</button>
              <button type="button" className="btn btn-outline" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'profissional-de-consorcio' } }))}>Quero ser MEX Club</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ModalCTA />
    </div>
  );
};

export default SobreMonteo;
