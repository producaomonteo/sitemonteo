import React from 'react';
import { Link } from 'react-router-dom';
import logoMonteo from '@Imagens/LOGO 2025 HORIZONTAL BRANCO-8.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Colunas de navegação */}
      <div className="container footer-cols">
        <div className="footer-col">
          <h4>ACESSAR</h4>
          <ul>
            <li><Link to="/cliente">Sou Cliente</Link></li>
            <li><Link to="/seja-franqueado">Sou Franqueado</Link></li>
            <li><Link to="/seja-parceiro">Sou Parceiro</Link></li>
            <li><Link to="/profissionais-de-consorcio">MEX Club</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>EMPRESA</h4>
          <ul>
            <li><Link to="/sobre-a-monteo">Sobre a Monteo</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>CONTATO</h4>
          <ul>
            <li><Link to="/seja-franqueado">Trabalhe Conosco</Link></li>
            <li><Link to="/contato">Fale Conosco</Link></li>
          </ul>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="container">
        <div className="footer-divider" />
      </div>

      {/* Redes sociais */}
      <div className="container footer-social">
        <a href="https://www.instagram.com/monteo.oficial/" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
          </svg>
          <span>INSTAGRAM</span>
        </a>

        <span className="footer-social-sep" />

        <a href="https://br.linkedin.com/company/monteo-investimentos" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="4.5" />
            <line x1="7" y1="10.2" x2="7" y2="16.6" />
            <circle cx="7" cy="7" r="0.95" fill="currentColor" stroke="none" />
            <line x1="11" y1="10.2" x2="11" y2="16.6" />
            <path d="M11 12.7c0-1.1.9-2 2-2s2 .9 2 2v3.9" />
          </svg>
          <span>LINKEDIN</span>
        </a>

        <span className="footer-social-sep" />

        <a href="https://www.youtube.com/@monteooficial" target="_blank" rel="noopener noreferrer" className="footer-social-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
            <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
            <path d="M10.3 9.2l4.6 2.8-4.6 2.8V9.2z" fill="currentColor" stroke="none" />
          </svg>
          <span>YOUTUBE</span>
        </a>
      </div>

      {/* Logo + copyright */}
      <div className="container footer-bottom">
        <img src={logoMonteo} alt="Monteo" className="footer-logo" />
        <p className="footer-tagline">Transformando o mercado de consórcios através da excelência operacional.</p>
        <p className="footer-copy">© 2026 Monteo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
