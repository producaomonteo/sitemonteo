import React from 'react';
import { Link } from 'react-router-dom';
import logoMonteo from '@Imagens/LOGO 2025 HORIZONTAL BRANCO-8.png';
import './Footer.css';

const TAMIRES_WHATSAPP = '5544991158523';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logoMonteo} alt="Monteo" className="footer-logo" />
          <p className="footer-tagline">Transformando o mercado de investimentos através da excelência operacional.</p>
        </div>

        <div className="footer-links">
          <div className="link-col">
            <h4>ACESSAR</h4>
            <ul>
              <li><Link to="/cliente">Sou Cliente</Link></li>
              <li><Link to="/seja-franqueado">Sou Franqueado</Link></li>
              <li><Link to="/seja-parceiro">Sou Parceiro</Link></li>
              <li><Link to="/profissionais-de-consorcio">MEX Club</Link></li>
            </ul>
          </div>
          <div className="link-col">
            <h4>EMPRESA</h4>
            <ul>
              <li><Link to="/sobre-a-monteo">Sobre a Monteo</Link></li>
            </ul>
          </div>
          <div className="link-col">
            <h4>CONTATO</h4>
            <ul>
              <li><Link to="/seja-franqueado">Trabalhe Conosco</Link></li>
              <li><Link to="/contato">Fale Conosco</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Monteo. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/monteo.oficial/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://br.linkedin.com/company/monteo-investimentos" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://www.youtube.com/@monteooficial" target="_blank" rel="noopener noreferrer">YOUTUBE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
