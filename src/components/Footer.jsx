import React from 'react';
import { Link } from 'react-router-dom';
import logoMonteo from '@Imagens/LOGO 2025 HORIZONTAL BRANCO-8.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logoMonteo} alt="Monteo Investimentos" className="footer-logo" />
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
              <li><Link to="/blog">Blog Monteo</Link></li>
            </ul>
          </div>
          <div className="link-col">
            <h4>CONTATO</h4>
            <ul>
              <li>Dúvidas Frequentes</li>
              <li>Trabalhe Conosco</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>© 2026 Monteo Investimentos. Todos os direitos reservados.</p>
        <div className="social-links">
          <span>INSTAGRAM</span>
          <span>LINKEDIN</span>
          <span>YOUTUBE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
