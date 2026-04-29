import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
            <a href="#formulario" className="btn btn-primary page-hero-btn">Quero entrar no MEX Club</a>
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
            <div className="profile-highlight glass-card">
              <p className="profile-highlight-text">
                Profissionais que já atuam com consórcio e buscam escalar sua operação,<br />
                com <strong>mínimo de R$ 2 milhões/mês</strong> em produção.
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

        {/* FORMULÁRIO */}
        <section className="page-section form-section" id="formulario">
          <div className="container form-container">
            <span className="label section-label">Candidate-se</span>
            <h2 className="section-title">Quero entrar no MEX Club</h2>
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
                  <label className="form-label">Produção mensal atual</label>
                  <select className="form-input form-select">
                    <option value="">Selecione</option>
                    <option>R$ 2 a 5 milhões/mês</option>
                    <option>R$ 5 a 10 milhões/mês</option>
                    <option>Acima de R$ 10 milhões/mês</option>
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

export default MexClub;
