import React from 'react';
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
              <li>SOU CLIENTE</li>
              <li>SOU FRANQUEADO</li>
              <li>SOU PARCEIRO</li>
              <li>QUERO SER MEX CLUB</li>
            </ul>
          </div>
          <div className="link-col">
            <h4>CONTEÚDO</h4>
            <ul>
              <li>MONTEO CAST</li>
              <li>RECEITA DE SUCESSO</li>
              <li>BLOG MONTEO</li>
            </ul>
          </div>
          <div className="link-col">
            <h4>CONTATO</h4>
            <ul>
              <li>DÚVIDAS FREQUENTES</li>
              <li>TRABALHE CONOSCO</li>
              <li>FALE CONOSCO</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>© 2024 Monteo Investimentos. Todos os direitos reservados.</p>
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
