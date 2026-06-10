import React, { useState } from 'react';
import './Differentials.css';

const AUDIENCES = [
  {
    id: 'cliente',
    label: 'Clientes',
    items: [
      { title: 'Grupos Exclusivos de Investidores', desc: 'Grupos de investidores que compartilham o mesmo objetivo de crescimento patrimonial.' },
      { title: 'Gestão Ativa das Cotas', desc: 'Acompanhamento contínuo da cota e oferta de lances para acelerar resultados.' },
      { title: 'Suporte Estratégico na Aquisição de Imóveis', desc: 'Orientação especializada para decisões mais seguras e inteligentes.' },
      { title: 'Liquidez para Negociação de Cartas', desc: 'Após a contemplação, não precisa esperar tanto para negociar a carta no mercado.' },
      { title: 'Especialista Dedicado ao Seu Acompanhamento', desc: 'Suporte consultivo durante toda a sua jornada patrimonial.' },
      { title: 'Planejamento Patrimonial Personalizado', desc: 'Estratégias alinhadas aos seus objetivos de curto, médio e longo prazo.' }
    ]
  },
  {
    id: 'franqueado',
    label: 'Franqueados',
    items: [
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
    ]
  },
  {
    id: 'profissional-de-consorcio',
    label: 'Profissionais de Consórcio',
    items: [
      { title: 'Comunidade Exclusiva de Alta Performance', desc: 'Conecte-se aos profissionais que mais crescem no mercado de consórcios — o MEX Club.' },
      { title: 'Mentoria e Desenvolvimento Contínuo', desc: 'Aprenda diretamente com especialistas e referências nacionais em vendas, gestão e crescimento.' },
      { title: 'Treinamentos Semanais', desc: 'Acesso constante a estratégias, processos e práticas que aceleram resultados.' },
      { title: 'Modelo de Remuneração Diferenciado', desc: 'Maiores comissões do mercado, inclusive sobre crédito integral em vendas de parcelas reduzidas.' },
      { title: 'Comissões Sem Estorno', desc: 'Mais previsibilidade financeira e segurança para construir uma operação sólida.' },
      { title: 'Verba de Marketing por Produção', desc: 'Receba incentivos adicionais conforme o crescimento do seu volume de vendas.' },
      { title: 'Premiações e Reconhecimento', desc: 'Campanhas exclusivas com viagens, carros, experiências e grandes premiações.' },
      { title: 'Acesso às Maiores Administradoras', desc: 'Mais opções de produtos, melhores oportunidades e maior competitividade para seus clientes.' }
    ]
  },
  {
    id: 'parceiro',
    label: 'Parceiros',
    items: [
      { title: 'Nova Fonte de Receita Recorrente', desc: 'Transforme sua carteira existente em uma nova fonte de receita sem criar uma nova operação.' },
      { title: 'Estrutura 100% Monteo', desc: 'Nossa equipe cuida de todo o processo comercial, operacional e de acompanhamento.' },
      { title: 'Associe sua Marca à Monteo', desc: 'Associe sua marca à maior referência em alavancagem patrimonial do Brasil.' },
      { title: 'Especialista Dedicado', desc: 'Suporte consultivo durante toda a jornada, garantindo uma experiência de excelência para seus clientes.' },
      { title: 'Transparência e Resultados', desc: 'Relatórios periódicos com indicadores, oportunidades e resultados gerados.' },
      { title: 'Sem Conflito com sua Atividade', desc: 'Solução complementar que amplia sua oferta de valor sem desviar o foco do seu negócio.' },
      { title: 'Planejamento Patrimonial para seus Clientes', desc: 'Uma solução que fortalece o relacionamento e aumenta a percepção de valor da sua marca.' }
    ]
  }
];

const DiffCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`diff-card${open ? ' is-open' : ''}`}>
      <button
        type="button"
        className="diff-card-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="diff-card-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="diff-card-title">{item.title}</span>
        <span className="diff-card-chevron" aria-hidden>+</span>
      </button>
      {open && (
        <div className="diff-card-body">
          <p>{item.desc}</p>
        </div>
      )}
    </div>
  );
};

const Differentials = () => {
  const [activeAudience, setActiveAudience] = useState('clientes');
  const current = AUDIENCES.find((a) => a.id === activeAudience);

  return (
    <section className="differentials mesh-bg">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">POR QUE MONTEO?</span>
          <h2 className="title">Diferenciais Monteo</h2>
        </div>

        <div className="diff-tabs">
          {AUDIENCES.map((aud) => (
            <button
              key={aud.id}
              type="button"
              className={`diff-tab${activeAudience === aud.id ? ' is-active' : ''}`}
              onClick={() => setActiveAudience(aud.id)}
            >
              {aud.label}
            </button>
          ))}
        </div>

        <div className="diff-cards-grid">
          {current?.items.map((item, i) => (
            <DiffCard key={i} item={item} index={i} />
          ))}
        </div>

        <div className="diff-cta">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.dispatchEvent(new CustomEvent('openCTAModal', { detail: { origin: activeAudience } }))}
          >
            Quero crescer com a Monteo →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
