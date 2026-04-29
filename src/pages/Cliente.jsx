import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
            <a href="#formulario" className="btn btn-primary page-hero-btn">Falar com especialista</a>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="page-section">
          <div className="container">
            <span className="label section-label">Como funciona</span>
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
            <span className="label section-label">Diferenciais</span>
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
            <span className="label section-label">Números que provam</span>
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
            <span className="label section-label">Dúvidas frequentes</span>
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

        {/* FORMULÁRIO */}
        <section className="page-section form-section" id="formulario">
          <div className="container form-container">
            <span className="label section-label">Dê o primeiro passo</span>
            <h2 className="section-title">Fale com um especialista</h2>
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
                  <label className="form-label">Objetivo</label>
                  <select className="form-input form-select">
                    <option value="">Selecione seu objetivo</option>
                    <option>Comprar imóvel</option>
                    <option>Comprar veículo</option>
                    <option>Investir / acumular patrimônio</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-primary form-btn">Quero falar com especialista</button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Cliente;
