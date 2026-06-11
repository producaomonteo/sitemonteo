import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageHero.css';
import './SejaParceiro.css';

const SejaParceiro = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Seja Parceiro</span>
            <h1 className="page-hero-title">Transforme sua carteira<br />em receita recorrente.</h1>
            <a href="#formulario" className="btn btn-primary page-hero-btn">Quero ser parceiro</a>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Como funciona</span>
            <h2 className="section-title">Simples e lucrativo</h2>
            <div className="steps-grid">
              {[
                { n: '01', title: 'Indicação', desc: 'Você indica clientes da sua carteira que têm interesse em consórcio ou planejamento patrimonial.' },
                { n: '02', title: 'Monteo executa', desc: 'Nossa equipe especializada cuida de todo o processo: atendimento, proposta e fechamento.' },
                { n: '03', title: 'Você recebe', desc: 'Participação na receita conforme o modelo de parceria acordado, de forma transparente e recorrente.' },
              ].map(s => (
                <div key={s.n} className="step-card glass-card">
                  <span className="step-number">{s.n}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">Benefícios</span>
            <h2 className="section-title">O que você ganha</h2>
            <div className="benefits-grid">
              {[
                { icon: '◆', title: 'Marca Monteo', desc: 'Agregue valor à sua entrega usando a credibilidade de uma marca reconhecida no mercado.' },
                { icon: '◆', title: 'Backoffice completo', desc: 'Toda a operação, contratos, CRM e suporte ficam por nossa conta. Você só indica.' },
                { icon: '◆', title: 'Comercial estruturado', desc: 'Time especializado para atender seus clientes com excelência e maximizar conversões.' },
                { icon: '◆', title: 'Transparência total', desc: 'Acompanhe em tempo real os resultados das suas indicações e sua participação na receita.' },
              ].map(b => (
                <div key={b.title} className="benefit-card glass-card">
                  <span className="benefit-icon">{b.icon}</span>
                  <h3 className="benefit-title">{b.title}</h3>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL IDEAL */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Para quem é</span>
            <h2 className="section-title">Perfil ideal de parceiro</h2>
            <div className="profile-grid">
              {[
                { title: 'Corretores de seguros', desc: 'Profissionais com carteira ativa de clientes que buscam soluções complementares de patrimônio.' },
                { title: 'Planejadores financeiros', desc: 'Especialistas que já orientam clientes sobre investimentos e querem ampliar seu portfólio.' },
                { title: 'Escritórios de investimentos', desc: 'Estruturas com relacionamento consolidado e interesse em oferecer consórcio como alternativa estratégica.' },
              ].map(p => (
                <div key={p.title} className="profile-card glass-card">
                  <h3 className="profile-title">{p.title}</h3>
                  <p className="profile-desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
                        <section className="page-section form-section" id="formulario" style={{textAlign:"center"}}>
          <div className="container">
            <h2 className="section-title" style={{textAlign:"center",marginBottom:"16px"}}>Quero crescer com a Monteo</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65"}}>Preencha seus dados e nossa equipe entrará em contato em breve.</p>
            <div style={{display:"flex",justifyContent:"center"}}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'parceiro' } }))}
              >
                QUERO CRESCER COM A MONTEO
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SejaParceiro;
