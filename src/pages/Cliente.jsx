import React, { useEffect } from 'react';
import Header from '../components/Header';
import ModalCTA from '../components/ModalCTA';
import './PageHero.css';
import './Cliente.css';

const Cliente = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Para quem quer crescer</span>
            <h1 className="page-hero-title">Estruture seu patrimônio<br />com estratégia.</h1>
            <button type="button" className="btn btn-primary page-hero-btn" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'cliente' } }))}>Falar com especialista</button>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Como funciona</span>
            <div className="steps-grid">
              {[
                { n: '01', title: 'Diagnóstico', desc: 'Entendemos sua situação financeira atual, seus objetivos e o melhor caminho para chegar lá.' },
                { n: '02', title: 'Planejamento personalizado', desc: 'Montamos uma estratégia sob medida com as melhores ferramentas do mercado de consórcio.' },
                { n: '03', title: 'Acompanhamento e assessoria na execução', desc: 'Estamos ao seu lado em cada etapa, do planejamento à conquista do seu objetivo.' },
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

        {/* NÚMEROS QUE PROVAM */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Números que provam</span>
            <div className="proof-row">
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
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Depoimentos</span>
            <h2 className="section-title" style={{textAlign:"center"}}>Quem já vive os resultados</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'24px', marginTop:'40px'}}>
              {[
                { name: 'Thiago Reis', role: 'EMPRESÁRIO', youtubeId: '5pEkPw2L2DQ' },
                { name: 'Max Jefferson', role: 'EMPRESÁRIO', youtubeId: 'omfdgae1BQE' },
                { name: 'Dr. Carlos Manfrim', role: 'CIRURGIÃO PLÁSTICO', youtubeId: 'GNMk80NnMfw' }
              ].map((t) => (
                <div key={t.youtubeId} style={{borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.02)'}}>
                  <a href={`https://www.youtube.com/watch?v=${t.youtubeId}`} target="_blank" rel="noopener noreferrer" style={{display:'block'}}>
                    <div style={{position:'relative',aspectRatio:'16/9'}}>
                      <img src={`https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg`} alt={t.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:'brightness(0.8)'}} onError={(e)=>{e.currentTarget.src=`https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg`}} />
                      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <div style={{width:'52px',height:'52px',borderRadius:'50%',background:'rgba(168,112,86,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                        </div>
                      </div>
                    </div>
                    <div style={{padding:'16px 20px'}}>
                      <span style={{fontSize:'10px',fontWeight:'700',letterSpacing:'2px',color:'var(--primary)',display:'block',marginBottom:'6px'}}>{t.role}</span>
                      <h3 style={{fontSize:'18px',fontWeight:'600',color:'var(--white)'}}>{t.name}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"left"}}>Diferenciais para Clientes</span>
            <h2 className="section-title">Por que a Monteo?</h2>
            <div style={{maxWidth:'860px',marginTop:'40px'}}>
              {[
                { title: 'Grupos Exclusivos de Investidores', desc: 'Grupos de investidores que compartilham o mesmo objetivo de crescimento patrimonial.' },
                { title: 'Gestão Ativa das Cotas', desc: 'Acompanhamento contínuo da cota e oferta de lances para acelerar resultados.' },
                { title: 'Suporte Estratégico na Aquisição de Imóveis', desc: 'Orientação especializada para decisões mais seguras e inteligentes.' },
                { title: 'Liquidez para Negociação de Cartas', desc: 'Após a contemplação, não precisa esperar tanto para negociar a carta no mercado.' },
                { title: 'Especialista Dedicado ao Seu Acompanhamento', desc: 'Suporte consultivo durante toda a sua jornada patrimonial.' },
                { title: 'Planejamento Patrimonial Personalizado', desc: 'Estratégias alinhadas aos seus objetivos de curto, médio e longo prazo.' }
              ].map((item, i) => (
                <details key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                  <summary style={{display:'flex',alignItems:'center',gap:'16px',padding:'20px 0',cursor:'pointer',listStyle:'none',color:'rgba(255,255,255,0.85)',fontSize:'17px',fontWeight:'500'}}>
                    <span style={{fontSize:'11px',color:'var(--primary)',fontWeight:'700',minWidth:'28px'}}>{String(i+1).padStart(2,'0')}</span>
                    {item.title}
                    <span style={{marginLeft:'auto',color:'var(--primary)',fontSize:'20px'}}>+</span>
                  </summary>
                  <p style={{color:'rgba(255,255,255,0.5)',fontSize:'15px',lineHeight:'1.75',padding:'0 0 20px 44px'}}>{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className="page-section form-section" id="formulario">
          <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <span style={{fontSize:"10px",letterSpacing:"4px",color:"var(--primary)",fontWeight:"700",textTransform:"uppercase",marginBottom:"14px",display:"block"}}>Dê o primeiro passo</span>
            <h2 style={{fontFamily:"Athelas,Georgia,serif",fontSize:"clamp(32px,4vw,52px)",color:"var(--white)",marginBottom:"16px",textAlign:"center",letterSpacing:"-0.02em"}}>Fale com um especialista</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65",maxWidth:"520px"}}>Preencha seus dados e um especialista Monteo entrará em contato para estruturar seu patrimônio.</p>
            <button type="button" className="btn btn-primary" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'cliente' } }))}>
              FALE COM UM ESPECIALISTA
            </button>
          </div>
        </section>

      </main>
      <ModalCTA />
    </div>
  );
};

export default Cliente;
