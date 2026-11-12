import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sanityClient, CATEGORIA_LABELS } from '../lib/sanity';
import { NOTICIAS_LIST_QUERY } from '../lib/queries';
import NoticiaCard from '../components/NoticiaCard';
import './PageHero.css';
import './Noticias.css';

export const noticiasLoader = async () => {
  const data = await sanityClient.fetch(NOTICIAS_LIST_QUERY);
  return data || [];
};

const FILTROS = [
  { value: 'todas', label: 'Todas' },
  { value: 'mercado', label: CATEGORIA_LABELS.mercado },
  { value: 'guias', label: CATEGORIA_LABELS.guias },
  { value: 'monteo', label: CATEGORIA_LABELS.monteo },
];

const Noticias = () => {
  const noticiasFromLoader = useLoaderData();
  const [noticias, setNoticias] = useState(noticiasFromLoader || []);
  const [filtro, setFiltro] = useState('todas');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Re-fetch no client para pegar conteúdo publicado após o último build.
  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch(NOTICIAS_LIST_QUERY)
      .then((data) => {
        if (cancelled || !data) return;
        setNoticias(data);
      })
      .catch(() => { /* mantém dados do build */ });
    return () => { cancelled = true; };
  }, []);

  const noticiasFiltradas = useMemo(() => {
    if (filtro === 'todas') return noticias;
    return noticias.filter((n) => n.categoria === filtro);
  }, [noticias, filtro]);

  const pageTitle = 'Notícias — Blog Monteo';
  const pageDescription = 'Estratégia, mercado e conhecimento sobre consórcio, patrimônio e investimentos pela Monteo.';

  return (
    <div className="monteo-app">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Conteúdo</span>
            <h1 className="page-hero-title">Notícias Monteo</h1>
            <p className="page-hero-subtitle">
              Estratégia, mercado e conhecimento para quem quer crescer com inteligência.
            </p>
          </div>
        </section>

        <section className="page-section noticia-section">
          <div className="container">
            {noticias.length > 0 && (
              <div className="noticia-filters" role="tablist" aria-label="Filtrar por categoria">
                {FILTROS.map((f) => (
                  <button
                    key={f.value}
                    type="button"
                    role="tab"
                    aria-selected={filtro === f.value}
                    className={`noticia-filter${filtro === f.value ? ' is-active' : ''}`}
                    onClick={() => setFiltro(f.value)}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}

            {noticias.length === 0 && (
              <div className="noticia-coming-soon">
                <div className="noticia-soon-card glass-card">
                  <span className="noticia-soon-icon">✦</span>
                  <h2 className="noticia-soon-title">Em breve</h2>
                  <p className="noticia-soon-text">
                    Estamos preparando conteúdos exclusivos sobre consórcio, patrimônio e
                    estratégia financeira. Volte em breve.
                  </p>
                  <Link to="/" className="btn btn-primary">Voltar para o início</Link>
                </div>
              </div>
            )}

            {noticias.length > 0 && noticiasFiltradas.length === 0 && (
              <div className="noticia-state">
                <p className="noticia-state-text">Nenhuma notícia nesta categoria ainda.</p>
              </div>
            )}

            {noticiasFiltradas.length > 0 && (
              <div className="noticia-grid">
                {noticiasFiltradas.map((n) => (
                  <NoticiaCard key={n._id} noticia={n} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Noticias;
