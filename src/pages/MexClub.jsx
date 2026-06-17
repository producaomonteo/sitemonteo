import React, { useEffect } from 'react';
import Header from '../components/Header';
import ModalCTA from '../components/ModalCTA';
import './PageHero.css';
import './MexClub.css';

const MexClub = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>

        {/* HERO */}
        <section className="page-hero page-hero--mex">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Profissionais de Consórcio</span>
            <h1 className="page-hero-title">Eleve sua operação<br />ao próximo nível.</h1>
            <p className="page-hero-subtitle">MEX Club — a comunidade exclusiva para quem já opera no mercado de consórcio e quer escalar.</p>
            <button type="button" className="btn btn-primary page-hero-btn" onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'profissional-de-consorcio' } }))}>Quero entrar no MEX Club</button>
          </div>
        </section>

        {/* O QUE É */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">O que é o MEX Club</span>
            <h2 className="section-title">Benefícios exclusivos<br />para quem performa</h2>
            <div className="benefits-grid">
              {[
                { icon: '◆', title: 'Melhores produtos e comissões', desc: 'Acesso aos produtos mais competitivos do mercado com tabelas exclusivas para membros do clube.' },
                { icon: '◆', title: 'Parcerias homologadas', desc: 'Administradoras e parceiros selecionados para garantir segurança e rentabilidade nas suas operações.' },
                { icon: '◆', title: 'Treinamento e acompanhamento', desc: 'Capacitação contínua com especialistas do mercado para você vender mais e melhor.' },
                { icon: '◆', title: 'Networking', desc: 'Conexão com os melhores profissionais do setor em eventos, encontros e grupos exclusivos.' },
                { icon: '◆', title: 'Comunidade exclusiva', desc: 'Acesso a um ambiente de troca de experiências, estratégias e oportunidades entre pares de alto nível.' },
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

        {/* PROVA */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">Quem já está dentro</span>
            <div className="proof-row">
              <div className="proof-block">
                <span className="proof-num">R$ 1,5 Bi</span>
                <span className="proof-desc">em cartas sob assessoria</span>
              </div>
              <div className="proof-block">
                <span className="proof-num">15 anos</span>
                <span className="proof-desc">de atuação no mercado</span>
              </div>
              <div className="proof-block">
                <span className="proof-num">GPTW</span>
                <span className="proof-desc">Selo de excelência</span>
              </div>
            </div>
            <div className="testimonials-mini">
              {[
                { name: 'Marcos V.', text: 'Entrei no MEX Club e em 3 meses já havia dobrado minha produção com as ferramentas e rede de contatos.' },
                { name: 'Patricia S.', text: 'As comissões e produtos que a Monteo oferece não encontro em nenhum outro lugar do mercado.' },
                { name: 'Diego A.', text: 'O nível do networking e dos treinamentos é outro. Quem está no MEX Club está anos à frente da concorrência.' },
              ].map(t => (
                <div key={t.name} className="mini-card glass-card">
                  <p className="mini-text">"{t.text}"</p>
                  <span className="mini-name">— {t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL IDEAL */}
        <section className="page-section">
          <div className="container faq-container">
            <span className="label section-label">Para quem é</span>
            <h2 className="section-title">Perfil ideal</h2>
            <div className="profile-highlight glass-card" style={{textAlign:'left', maxWidth:'600px'}}>
              <p className="profile-highlight-text">
                Profissionais que já atuam com consórcio e buscam escalar sua operação.<br /><br />
                Perfil mínimo: <strong>R$ 2 milhões/mês</strong> em produção.
              </p>
            </div>
          </div>
        </section>

        {/* COMO ENTRAR */}
        <section className="page-section page-section--alt">
          <div className="container">
            <span className="label section-label">Como entrar</span>
            <h2 className="section-title">Processo de seleção</h2>
            <div className="steps-grid">
              {[
                { n: '01', title: 'Aplicação', desc: 'Preencha o formulário com seus dados e volume atual de operação.' },
                { n: '02', title: 'Análise', desc: 'Nossa equipe avalia o seu perfil e entra em contato para uma conversa.' },
                { n: '03', title: 'Aprovação', desc: 'Aprovado, você recebe acesso completo ao MEX Club e todo seu ecossistema.' },
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
            <span className="label section-label" style={{display:"block",textAlign:"left"}}>Diferenciais MEX Club</span>
            <h2 className="section-title">Por que fazer parte do MEX Club?</h2>
            <div style={{maxWidth:'860px',marginTop:'40px'}}>
              {[
                { title: 'Comunidade Exclusiva de Alta Performance', desc: 'Conecte-se aos profissionais que mais crescem no mercado de consórcios.' },
                { title: 'Mentoria e Desenvolvimento Contínuo', desc: 'Aprenda diretamente com especialistas e referências nacionais em vendas, gestão e crescimento.' },
                { title: 'Treinamentos Semanais', desc: 'Acesso constante a estratégias, processos e práticas que aceleram resultados.' },
                { title: 'Modelo de Remuneração Diferenciado', desc: 'Maiores comissões do mercado, inclusive sobre crédito integral em vendas de parcelas reduzidas.' },
                { title: 'Comissões Sem Estorno', desc: 'Mais previsibilidade financeira e segurança para construir uma operação sólida.' },
                { title: 'Verba de Marketing por Produção', desc: 'Receba incentivos adicionais conforme o crescimento do seu volume de vendas.' },
                { title: 'Premiações e Reconhecimento', desc: 'Campanhas exclusivas com viagens, carros, experiências e grandes premiações.' },
                { title: 'Acesso às Maiores Administradoras', desc: 'Mais opções de produtos, melhores oportunidades e maior competitividade para seus clientes.' }
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

        {/* DEPOIMENTO */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label" style={{display:"block",textAlign:"center"}}>Depoimento</span>
            <h2 className="section-title" style={{textAlign:"center"}}>Quem já está no próximo nível</h2>
            <div style={{maxWidth:'560px',margin:'40px auto 0',borderRadius:'12px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.08)'}}>
              <a href="https://www.youtube.com/watch?v=w8SNOj5k5vA" target="_blank" rel="noopener noreferrer" style={{display:'block'}}>
                <div style={{position:'relative',aspectRatio:'16/9'}}>
                  <img src="https://img.youtube.com/vi/w8SNOj5k5vA/maxresdefault.jpg" alt="Profissional de Consórcio" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',filter:'brightness(0.8)'}} onError={(e)=>{e.currentTarget.src='https://img.youtube.com/vi/w8SNOj5k5vA/hqdefault.jpg'}} />
                  <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <div style={{width:'64px',height:'64px',borderRadius:'50%',background:'rgba(168,112,86,0.9)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                    </div>
                  </div>
                </div>
                <div style={{padding:'16px 20px',background:'rgba(255,255,255,0.02)'}}>
                  <span style={{fontSize:'10px',fontWeight:'700',letterSpacing:'2px',color:'var(--primary)',display:'block',marginBottom:'6px'}}>MEX CLUB</span>
                  <h3 style={{fontSize:'18px',fontWeight:'600',color:'var(--white)'}}>Profissional de Consórcio</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
                                <section className="page-section form-section" id="formulario">
          <div className="container" style={{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}}>
            <span style={{fontSize:"10px",letterSpacing:"4px",color:"var(--primary)",fontWeight:"700",textTransform:"uppercase",marginBottom:"14px",display:"block"}}>Faça parte</span>
            <h2 style={{fontFamily:"Athelas,Georgia,serif",fontSize:"clamp(32px,4vw,52px)",color:"var(--white)",marginBottom:"16px",textAlign:"center",letterSpacing:"-0.02em"}}>Quero entrar no MEX Club</h2>
            <p style={{textAlign:"center",marginBottom:"32px",fontSize:"17px",color:"rgba(255,255,255,0.6)",lineHeight:"1.65",maxWidth:"520px"}}>Preencha seus dados e nossa equipe entrará em contato para te apresentar o melhor modelo do mercado.</p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: 'profissional-de-consorcio' } }))}
            >
              QUERO ENTRAR NO MEX CLUB
            </button>
          </div>
        </section>

      </main>
      <ModalCTA />
    </div>
  );
};

export default MexClub;
