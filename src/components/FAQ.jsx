import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'Existe risco nesse tipo de estratégia?',
    a: 'Como toda decisão financeira, essa estratégia exige planejamento e critérios bem definidos. As administradoras de consórcio são regulamentadas e fiscalizadas pelo Banco Central, trazendo segurança e transparência para o segmento. Por isso, a Monteo atua com algumas das principais administradoras do mercado e busca estruturar estratégias alinhadas ao perfil de cada cliente.'
  },
  {
    q: 'E se minha contemplação demorar mais do que o esperado?',
    a: 'A contemplação depende de fatores como as características do grupo, a estratégia adotada e a participação ativa do cliente. Por isso, a Monteo realiza uma gestão estratégica contínua buscando potencializar as oportunidades de contemplação. Além disso, mais importante do que a velocidade da contemplação é a estratégia utilizada para a construção patrimonial.'
  },
  {
    q: 'Consórcio só vale a pena se contemplar rápido?',
    a: 'Não. Embora a contemplação antecipada possa acelerar os resultados, o principal diferencial está na estratégia utilizada. Mesmo em cenários de longo prazo, é possível construir patrimônio de forma eficiente, preservando liquidez e reduzindo a necessidade de utilizar grandes volumes de capital próprio. Por isso, mais importante do que a velocidade da contemplação é a estratégia.'
  },

  {
    q: 'Preciso investir grandes valores para começar?',
    a: 'Não. Um dos principais diferenciais dessa estratégia é justamente a possibilidade de construir patrimônio de forma gradual, através de aportes mensais planejados, sem a necessidade de imobilizar grandes volumes de capital próprio.'
  },
  {
    q: 'Qual o diferencial da Monteo frente a outras empresas que atuam com consórcios?',
    a: 'Um consórcio sem estratégia é apenas um produto. O diferencial da Monteo está na forma como essa ferramenta é utilizada, através de estratégia, assessoria e acompanhamento voltados para a construção patrimonial de longo prazo.'
  },
  {
    q: 'Como a Monteo é remunerada?',
    a: 'A Monteo é remunerada através das parcerias comerciais com as administradoras dos produtos utilizados nas estratégias. Nosso foco é construir relações de longo prazo, entregando estratégia, assessoria e acompanhamento aos nossos clientes.'
  },
  {
    q: 'Onde posso aprender mais sobre construção patrimonial através de consórcios?',
    a: 'Você pode acompanhar o Monteocast, canal oficial de conteúdo da Monteo sobre construção patrimonial e estratégias de longo prazo. Os episódios estão disponíveis gratuitamente no YouTube e Spotify.',
    link: 'https://www.youtube.com/watch?v=89_4jaPNwxg&list=PLVU13ZzvmqTz4hymX_FdcQUmEDDr1bCPG',
    linkLabel: 'Assistir Monteocast no YouTube →'
  },
];

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <button type="button" className="faq-trigger" onClick={() => setOpen(o => !o)}>
        <span className="faq-question">{item.q}</span>
        <span className="faq-icon" aria-hidden>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-answer">
          <p>{item.a}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="faq-link-btn">
              {item.linkLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="faq-section mesh-bg">
    <div className="container">
      <div className="section-header reveal-up active">
        <span className="label">DÚVIDAS FREQUENTES</span>
        <h2 className="title">As dúvidas mais comuns sobre a estratégia apresentada.</h2>
        <p className="subtitle">Selecionamos algumas das perguntas mais frequentes feitas por médicos, empresários e profissionais liberais.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => <FAQItem key={i} item={item} />)}
      </div>
    </div>
  </section>
);

export default FAQ;
