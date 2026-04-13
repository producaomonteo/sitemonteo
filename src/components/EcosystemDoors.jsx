import React, { useEffect, useRef } from 'react';
import './EcosystemDoors.css';

const ecosystemDoors = [
  {
    title: 'INVESTIDOR',
    description: 'Transforme seus planos em patrimônio com estratégia personalizada.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: '#A87056'
  },
  {
    title: 'FRANQUEADO',
    description: 'Construa uma carreira sólida utilizando o método Monteo.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y1="21" />
      </svg>
    ),
    color: '#A87056'
  },
  {
    title: 'PARCEIRO',
    description: 'Converta sua rede de contatos em receita sem precisar vender nada.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#A87056'
  },
  {
    title: 'MEX CLUB',
    description: 'Eleve sua operação de consórcio ao mais alto patamar do mercado.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: '#A87056'
  }
];

const EcosystemDoors = () => {
  const scrollRef = useRef([]);

  useEffect(() => {
    // Reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    scrollRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ecosystem-doors reveal-section">
      <div className="container">
        <div className="section-header reveal-up" ref={el => scrollRef.current[0] = el}>
          <span className="label">PORTAS DO ECOSSISTEMA</span>
          <h2 className="title">Escolha sua jornada</h2>
          <p className="subtitle">Uma estrutura sólida conectando cada ponta do mercado.</p>
        </div>

        <div className="doors-grid">
          {ecosystemDoors.map((door, i) => (
            <div 
              key={door.title} 
              className="door-card glass-card reveal-up"
              ref={el => scrollRef.current[i + 1] = el}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="card-border-beam"></div>
              <div className="card-icon">{door.icon}</div>
              <h3 className="card-title">{door.title}</h3>
              <p className="card-desc">{door.description}</p>
              <div className="card-footer">
                <span>VER DETALHES</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemDoors;
