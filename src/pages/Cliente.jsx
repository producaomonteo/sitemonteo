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

        {/* DIFERENCIAIS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Diferenciais</span>
            <h2 className="section-title">Por que a Monteo?</h2>
            <div className="diff-list">
              {[
                'Planejamento estruturado',
                'Assessoria especializada',
                'Time de especialistas',
                'Acompanhamento mensal',
                'Orientações imobiliárias',
                'Liquidez na venda da carta',
                'Condições exclusivas',
              ].map(d => (
                <div key={d} className="diff-pill glass-card">
                  <span className="diff-pill-dot" />
                  {d}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA */}
        <section className="page-section">
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
            <div className="testimonials-mini">
              {[
                { name: 'Ana Paula M.', text: 'A Monteo transformou minha visão sobre investimento em consórcio. Resultado real e acompanhamento de verdade.' },
                { name: 'Carlos R.', text: 'Profissionalismo e estratégia que eu nunca tinha visto nesse mercado. Recomendo sem hesitar.' },
                { name: 'Fernanda L.', text: 'Saí do zero e hoje tenho um patrimônio estruturado graças ao planejamento da equipe Monteo.' },
              ].map(t => (
                <div key={t.name} className="mini-card glass-card">
                  <p className="mini-text">"{t.text}"</p>
                  <span className="mini-name">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="page-section page-section--alt">
          <div className="container faq-container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Dúvidas frequentes</span>
            <h2 className="section-title">FAQ</h2>
            <div className="faq-list">
              {[
                { q: 'O consórcio é um bom investimento?', a: 'Sim. Além de ser uma forma disciplinada de acumulação de patrimônio, o consórcio tem taxas muito menores que financiamentos tradicionais.' },
                { q: 'Quanto tempo leva para ser contemplado?', a: 'A contemplação pode ocorrer a qualquer momento do grupo, seja por sorteio ou lance. Nossa assessoria maximiza suas chances.' },
                { q: 'Como a Monteo me acompanha?', a: 'Com reuniões mensais, relatórios de posição e suporte direto com seu assessor dedicado durante toda a jornada.' },
                { q: 'Posso usar o consórcio para imóvel e veículo?', a: 'Sim. Trabalhamos com consórcios de imóveis, veículos leves, pesados e serviços, sempre com as melhores condições do mercado.' },
              ].map(f => (
                <details key={f.q} className="faq-item glass-card">
                  <summary className="faq-question">{f.q}</summary>
                  <p className="faq-answer">{f.a}</p>
                </details>
              ))}
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

        {/* FORMULÁRIO */}
                        <section className="page-section form-section" id="formulario">
          <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <span style={{fontSize:"10px",letterSpacing:"4px",color:"var(--primary)",fontWeight:"700",textTransform:"uppercase",marginBottom:"14px",display:"block"}}>Dê o primeiro passo</span>
            <h2 style={{fontFamily:"Athelas,Georgia,serif",fontSize:"clamp(32px,4vw,52px)",color:"var(--white)",marginBottom:"16px",textAlign:"center",letterSpacing:"-0.02em"}}>Fale com um especialista</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65",maxWidth:"520px"}}>Preencha seus dados e um especialista Monteo entrará em contato para estruturar seu patrimônio.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'cliente' } }))}
            >
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
