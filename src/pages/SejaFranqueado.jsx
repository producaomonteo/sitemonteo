import React, { useEffect } from 'react';
import Header from '../components/Header';
import ModalCTA from '../components/ModalCTA';
import './PageHero.css';
import './SejaFranqueado.css';

const SejaFranqueado = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>
        {/* HERO */}
        <section className="page-hero">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Seja Franqueado</span>
            <h1 className="page-hero-title">Construa uma operação<br />sólida com a Monteo.</h1>
            <button type="button" className="btn btn-primary page-hero-btn" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'franqueado' } }))}>Quero ser franqueado</button>
          </div>
        </section>

        {/* MODELOS */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Modelos de atuação</span>
            <h2 className="section-title">Escolha seu formato</h2>
            <div className="models-grid">
              <div className="model-card glass-card">
                <span className="model-tag">Individual</span>
                <h3 className="model-title">Franqueado</h3>
                <p className="model-desc">Opere com autonomia total, com a força da marca e do ecossistema Monteo ao seu lado. Ideal para quem quer construir sua própria carteira.</p>
              </div>
              <div className="model-card glass-card model-card--featured">
                <span className="model-tag model-tag--primary">Com time</span>
                <h3 className="model-title">Master Franqueado</h3>
                <p className="model-desc">Monte e lidere sua própria equipe de consultores. Escale sua operação com suporte completo de estrutura, treinamento e gestão.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">O que você recebe</span>
            <h2 className="section-title">Sua operação completa</h2>
            <div className="benefits-grid">
              {[
                { icon: '◆', title: 'Marca forte', desc: 'Use a credibilidade e o reconhecimento da Monteo para abrir portas e fechar mais negócios.' },
                { icon: '◆', title: 'Método de vendas', desc: 'Processo comercial testado e validado com scripts, funis e cadências que convertem.' },
                { icon: '◆', title: 'Mentores especialistas', desc: 'Acesso direto a líderes experientes para acelerar sua curva de aprendizado.' },
                { icon: '◆', title: 'Acompanhamento constante', desc: 'Reuniões regulares de performance, revisão de metas e suporte operacional.' },
                { icon: '◆', title: 'Ecossistema', desc: 'Tecnologia, produtos, parceiros e estrutura para você focar no que importa: vender.' },
                { icon: '◆', title: 'Treinamentos', desc: 'Plataforma de capacitação contínua com trilhas de vendas, técnica e liderança.' },
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

        {/* DEPOIMENTO */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Depoimento</span>
            <h2 className="section-title" style={{textAlign:"center"}}>Quem já faz parte</h2>
            <div style={{maxWidth:'560px',margin:'40px auto 0',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
              <a href="https://www.youtube.com/watch?v=7HJRnQiB5Eg" target="_blank" rel="noopener noreferrer" style={{display:'block'}}>
                <div style={{position:'relative',aspectRatio:'16/9'}}>
                  <img src="https://img.youtube.com/vi/7HJRnQiB5Eg/maxresdefault.jpg" alt="Leanderson Giacomello" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:'brightness(0.8)'}} onError={(e)=>{e.currentTarget.src='https://img.youtube.com/vi/7HJRnQiB5Eg/hqdefault.jpg'}} />
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'rgba(168,112,86,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                    </div>
                  </div>
                </div>
                <div style={{padding:'16px 20px',background:'rgba(255,255,255,0.02)'}}>
                  <span style={{fontSize:'10px',fontWeight:'700',letterSpacing:'2px',color:'var(--primary)',display:'block',marginBottom:'6px'}}>FRANQUEADO MONTEO</span>
                  <h3 style={{fontSize:'18px',fontWeight:'600',color:'var(--white)'}}>Leanderson Giacomello</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"left"}}>Diferenciais para Franqueados</span>
            <h2 className="section-title">Por que ser franqueado Monteo?</h2>
            <div style={{maxWidth:'860px',marginTop:'40px'}}>
              {[
                { title: 'Método Comercial Validado', desc: 'Método comercial de alta performance testado e validado com centenas de unidades.' },
                { title: 'Sistema de Indicações Previsíveis', desc: 'Geração contínua de clientes através de um sistema estruturado de indicações.' },
                { title: 'Acompanhamento com Liderança', desc: 'Acompanhamento próximo com liderança experiente em todo o processo.' },
                { title: 'Treinamentos Contínuos', desc: 'Desenvolvimento profissional constante com treinamentos de alta qualidade.' },
                { title: 'Cultura Forte e Humanizada', desc: 'Cultura certificada GPTW, focada em pessoas e resultados sustentáveis.' },
                { title: 'Marca em Forte Expansão', desc: 'Marca consolidada e em forte expansão nacional com presença em todo o Brasil.' },
                { title: 'Know-how dos Fundadores', desc: 'Acesso direto ao know-how dos fundadores e especialistas do ecossistema.' },
                { title: 'Remuneração Altamente Atrativa', desc: 'Modelo de remuneração diferenciado e altamente competitivo no mercado.' },
                { title: 'Backoffice Especializado', desc: 'Suporte operacional completo com backoffice dedicado à sua operação.' },
                { title: 'Marketing e Processos Estruturados', desc: 'Marketing, processos e ferramentas já estruturados e prontos para uso.' },
                { title: 'Crescimento e Equipe Própria', desc: 'Possibilidade de crescimento e construção de equipe própria dentro da rede.' }
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

        {/* ETAPAS */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">Como entrar</span>
            <h2 className="section-title">Processo seletivo</h2>
            <div className="steps-grid steps-grid--3">
              {[
                { n: '01', title: 'Aplicação', desc: 'Preencha o formulário com seus dados e perfil de interesse.' },
                { n: '02', title: 'Análise', desc: 'Nossa equipe avalia seu perfil e entra em contato para uma conversa.' },
                { n: '03', title: 'Aprovação', desc: 'Após aprovado, você recebe o onboarding completo para iniciar sua operação.' },
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

        {/* FORMULÁRIO */}
                                <section className="page-section form-section" id="formulario">
          <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <span style={{fontSize:"10px",letterSpacing:"4px",color:"var(--primary)",fontWeight:"700",textTransform:"uppercase",marginBottom:"14px",display:"block"}}>Candidate-se</span>
            <h2 style={{fontFamily:"Athelas,Georgia,serif",fontSize:"clamp(32px,4vw,52px)",color:"var(--white)",marginBottom:"16px",textAlign:"center",letterSpacing:"-0.02em"}}>Quero ser franqueado</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65",maxWidth:"520px"}}>Preencha seus dados e nossa equipe de expansão entrará em contato para apresentar o modelo completo.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'franqueado' } }))}
            >
              QUERO SER FRANQUEADO
            </button>
          </div>
        </section>

      </main>
      <ModalCTA />
    </div>
  );
};

export default SejaFranqueado;
