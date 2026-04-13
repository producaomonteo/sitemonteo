import React from 'react';
import './Differentials.css';

const differentials = [
  { 
    id: '01', 
    title: 'Metodologia Proprietária', 
    desc: 'Método validado com mais de 25 mil clientes atendidos e 1.3BI sob gestão.' 
  },
  { 
    id: '02', 
    title: 'Ecossistema Conectado', 
    desc: 'Unimos todos os players do mercado em uma única estrutura de crescimento.' 
  },
  { 
    id: '03', 
    title: 'Cultura de Excelência', 
    desc: 'Certificados GPTW, focados em pessoas e resultados sustentáveis.' 
  },
  { 
    id: '04', 
    title: 'Estrutura de Backoffice', 
    desc: 'Suporte completo para que você foque apenas na estratégia e expansão.' 
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
