import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
            <a href="#formulario" className="btn btn-primary page-hero-btn">Quero ser franqueado</a>
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

        {/* PROVA */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Autoridade comprovada</span>
            <div className="proof-row">
              <div className="proof-block">
                <span className="proof-num">R$ 300 Mi</span>
                <span className="proof-desc">em vendas estruturadas</span>
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
            <div className="testimonials-mini">
              {[
                { name: 'Ricardo T.', text: 'Entrei como franqueado há 2 anos e hoje tenho uma operação estruturada com 8 pessoas no time.' },
                { name: 'Juliana C.', text: 'O método Monteo me deu clareza e previsibilidade. Nunca imaginei crescer tão rápido.' },
              ].map(t => (
                <div key={t.name} className="mini-card glass-card">
                  <p className="mini-text">"{t.text}"</p>
                  <span className="mini-name">— {t.name}</span>
                </div>
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
          <div className="container form-container">
            <span className="label section-label">Candidate-se</span>
            <h2 className="section-title">Quero ser franqueado</h2>
            <form className="page-form glass-card" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nome</label>
                  <input type="text" className="form-input" placeholder="Seu nome completo" />
                </div>
                <div className="form-group">
                  <label className="form-label">WhatsApp</label>
                  <input type="tel" className="form-input" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Cidade</label>
                  <input type="text" className="form-input" placeholder="Sua cidade" />
                </div>
                <div className="form-group">
                  <label className="form-label">Modelo de interesse</label>
                  <select className="form-input form-select">
                    <option value="">Selecione</option>
                    <option>Franqueado (autônomo)</option>
                    <option>Master Franqueado (com time)</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary form-btn">Enviar candidatura</button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SejaFranqueado;
