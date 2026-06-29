import React, { useEffect } from 'react';
import Header from '../components/Header';
import ModalCTA from '../components/ModalCTA';
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
            <button type="button" className="btn btn-primary page-hero-btn" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'parceiro' } }))}>Quero ser parceiro</button>
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

        {/* DIFERENCIAIS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"left"}}>Diferenciais para Parceiros</span>
            <h2 className="section-title">Por que ser parceiro Monteo?</h2>
            <div style={{maxWidth:'860px',marginTop:'40px'}}>
              {[
                { title: 'Nova Fonte de Receita Recorrente', desc: 'Transforme sua carteira existente em uma nova fonte de receita sem criar uma nova operação.' },
                { title: 'Estrutura 100% Monteo', desc: 'Nossa equipe cuida de todo o processo comercial, operacional e de acompanhamento.' },
                { title: 'Associe sua Marca à Monteo', desc: 'Associe sua marca à maior referência em alavancagem patrimonial do Brasil.' },
                { title: 'Especialista Dedicado', desc: 'Suporte consultivo durante toda a jornada, garantindo uma experiência de excelência para seus clientes.' },
                { title: 'Transparência e Resultados', desc: 'Relatórios periódicos com indicadores, oportunidades e resultados gerados.' },
                { title: 'Sem Conflito com sua Atividade', desc: 'Solução complementar que amplia sua oferta de valor sem desviar o foco do seu negócio.' },
                { title: 'Planejamento Patrimonial para seus Clientes', desc: 'Uma solução que fortalece o relacionamento e aumenta a percepção de valor da sua marca.' }
              ].map((item, i) => (
                <details key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                  <summary style={{display:'flex',alignItems:'center',gap:'16px',padding:'20px 0',cursor:'pointer',listStyle:'none',color:'rgba(255,255,255,0.85)',fontSize:'17px',fontWeight:'500',textAlign:'left'}}>
                    <span style={{fontSize:'11px',color:'var(--primary)',fontWeight:'700',minWidth:'28px'}}>{String(i+1).padStart(2,'0')}</span>
                    {item.title}
                    <span style={{marginLeft:'auto',color:'var(--primary)',fontSize:'20px'}}>+</span>
                  </summary>
                  <p style={{color:'rgba(255,255,255,0.5)',fontSize:'15px',lineHeight:'1.75',padding:'0 0 20px 44px',textAlign:'left'}}>{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
                                <section className="page-section form-section" id="formulario">
          <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <span style={{fontSize:"10px",letterSpacing:"4px",color:"var(--primary)",fontWeight:"700",textTransform:"uppercase",marginBottom:"14px",display:"block"}}>Seja nosso parceiro</span>
            <h2 style={{fontFamily:"Athelas,Georgia,serif",fontSize:"clamp(32px,4vw,52px)",color:"var(--white)",marginBottom:"16px",textAlign:"center",letterSpacing:"-0.02em"}}>Quero ser parceiro</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65",maxWidth:"520px"}}>Preencha seus dados e nossa equipe entrará em contato para apresentar as possibilidades de parceria.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'parceiro' } }))}
            >
              QUERO SER PARCEIRO
            </button>
          </div>
        </section>

      </main>
      <ModalCTA />
    </div>
  );
};

export default SejaParceiro;
