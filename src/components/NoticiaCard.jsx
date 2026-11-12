import React from 'react';
import { Link } from 'react-router-dom';
import { urlForImage, formatDatePtBr, CATEGORIA_LABELS } from '../lib/sanity';
import './NoticiaCard.css';

const NoticiaCard = ({ noticia }) => {
  if (!noticia) return null;

  return (
    <Link to={`/noticias/${noticia.slug}`} className="noticia-card glass-card">
      {noticia.capa?.asset && (
        <div className="noticia-card-media">
          <img
            src={urlForImage(noticia.capa).width(800).height(520).fit('crop').auto('format').url()}
            alt={noticia.capa.alt || noticia.titulo}
            loading="lazy"
          />
        </div>
      )}
      <div className="noticia-card-body">
        <span className="noticia-card-category">
          {CATEGORIA_LABELS[noticia.categoria] || 'Notícia'}
        </span>
        <h3 className="noticia-card-title">{noticia.titulo}</h3>
        <p className="noticia-card-excerpt">{noticia.resumo}</p>
        <div className="noticia-card-footer">
          <time dateTime={noticia.publicadoEm}>
            {formatDatePtBr(noticia.publicadoEm)}
          </time>
          <span className="noticia-card-cta">Ler notícia →</span>
        </div>
      </div>
    </Link>
  );
};

export default NoticiaCard;
