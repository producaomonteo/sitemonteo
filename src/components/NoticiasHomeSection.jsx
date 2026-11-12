import React from 'react';
import { Link } from 'react-router-dom';
import NoticiaCard from './NoticiaCard';
import './NoticiasHomeSection.css';

const NoticiasHomeSection = ({ noticias }) => {
  if (!noticias || noticias.length === 0) return null;

  return (
    <section className="noticias-home-section">
      <div className="container">
        <div className="section-header noticias-home-header">
          <div>
            <span className="label">CONTEÚDO</span>
            <h2 className="title noticias-home-title">Notícias Monteo</h2>
          </div>
          <Link to="/noticias" className="noticias-home-link">
            Ver todas as notícias →
          </Link>
        </div>
        <div className="noticia-grid">
          {noticias.map((n) => (
            <NoticiaCard key={n._id} noticia={n} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticiasHomeSection;
