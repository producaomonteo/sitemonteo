import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <main className="contato-page">
      <div className="container">
        <div className="section-header reveal-up active">
          <span className="label">FALE CONOSCO</span>
          <h1 className="title">Entre em contato com a Monteo</h1>
          <p className="subtitle">Nossa equipe está pronta para te atender.</p>
        </div>

        <div className="contato-cards">
          <a
            href="mailto:atendimento@monteo.com.br"
            className="contato-card"
          >
            <div className="contato-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contato-card-info">
              <span className="contato-card-label">E-MAIL</span>
              <span className="contato-card-value">atendimento@monteo.com.br</span>
            </div>
          </a>

          <a
            href="https://wa.me/5544991158523"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-card"
          >
            <div className="contato-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.532 5.845L.057 23.547a.75.75 0 00.906.919l5.857-1.533A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.065-1.378l-.361-.214-3.742.979.999-3.645-.235-.374A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
            </div>
            <div className="contato-card-info">
              <span className="contato-card-label">WHATSAPP</span>
              <span className="contato-card-value">(44) 9115-8523</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contato;
