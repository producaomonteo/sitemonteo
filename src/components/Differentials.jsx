import React from 'react';
import './Differentials.css';
const differentials = [
  { 
    id: '01', 
    title: 'Metodologia Proprietária', 
    desc: 'Método validado com mais de 1.500 clientes atendidos e R$ 1,5 bilhão em cartas de crédito sob assessoria.' 
  },
  { 
    id: '02', 
    title: 'Estrutura Comercial', 
    desc: 'Suporte completo para que você foque apenas na estratégia e expansão.' 
  },
  { 
    id: '03', 
    title: 'Ecossistema Conectado', 
    desc: 'Unimos todos os players do mercado em uma única estrutura de crescimento.' 
  },
  { 
    id: '04', 
    title: 'Rede Nacional', 
    desc: 'Presença em todo o Brasil com franqueados e parceiros estratégicos.' 
  },
  { 
    id: '05', 
    title: 'Parcerias Estratégicas', 
    desc: 'Conexões com os principais players do mercado para potencializar seus resultados.' 
  },
  { 
    id: '06', 
    title: 'Cultura Forte', 
    desc: 'Certificados GPTW, focados em pessoas e resultados sustentáveis.' 
  }
];
const Differentials = () => {
  return (
    <section className="differentials mesh-bg">
      <div className="container">
        <div className="diff-header section-header reveal-up active">
          <span className="label">POR QUE MONTEO?</span>
          <h2 className="title">Diferenciais Estratégicos</h2>
        </div>
        <div className="diff-list">
          {differentials.map((item) => (
            <div key={item.id} className="diff-item reveal-up active">
              <span className="diff-id">{item.id}</span>
              <div className="diff-content">

                <h3 className="diff-title">{item.title}</h3>
                <p className="diff-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;