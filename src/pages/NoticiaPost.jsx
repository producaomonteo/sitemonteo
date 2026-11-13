import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PortableText } from '@portabletext/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NoticiaCard from '../components/NoticiaCard';
import { sanityClient, urlForImage, formatDateTimePtBr, CATEGORIA_LABELS } from '../lib/sanity';
import PostShare from '../components/PostShare';
import {
  NOTICIA_BY_SLUG_QUERY,
  NOTICIAS_RELACIONADAS_QUERY,
} from '../lib/queries';
import './PageHero.css';
import './Noticias.css';
import './NoticiaPost.css';
import './NoticiaPageTheme.css';

const SITE_URL = 'https://monteo.com.br';

export const noticiaPostLoader = async ({ params }) => {
  const noticia = await sanityClient.fetch(NOTICIA_BY_SLUG_QUERY, { slug: params.slug });
  if (!noticia) return { noticia: null, relacionadas: [] };

  const relacionadas = await sanityClient
    .fetch(NOTICIAS_RELACIONADAS_QUERY, { slug: params.slug, categoria: noticia.categoria })
    .catch(() => []);

  return {
    noticia,
    relacionadas: relacionadas || [],
  };
};

export const noticiaPostStaticPaths = async () => {
  const slugs = await sanityClient.fetch(
    `*[_type == "noticia" && defined(slug.current) && !(_id in path("drafts.**"))].slug.current`
  );
  return (slugs || []).map((slug) => `/noticias/${slug}`);
};

const portableComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlForImage(value).width(1600).auto('format').url();
      return (
        <figure className="post-figure">
          <img src={src} alt={value.alt || ''} loading="lazy" />
          {value.legenda && <figcaption>{value.legenda}</figcaption>}
        </figure>
      );
    },
    caixaDestaque: ({ value }) => {
      const itens = Array.isArray(value?.itens) ? value.itens : [];
      if (itens.length === 0) return null;
      return (
        <aside className="post-callout">
          {value.titulo && <h4 className="post-callout-title">{value.titulo}</h4>}
          <ul className="post-callout-list">
            {itens.map((item, i) => (
              <li key={i} className="post-callout-item">{item}</li>
            ))}
          </ul>
        </aside>
      );
    },
  },
  block: {
    normal: ({ children }) => <p className="post-paragraph">{children}</p>,
    h2: ({ children }) => <h2 className="post-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="post-h3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="post-quote">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="post-list">{children}</ul>,
    number: ({ children }) => <ol className="post-list post-list--ordered">{children}</ol>,
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const isExternal = /^https?:/i.test(href);
      return (
        <a
          href={href}
          className="post-link"
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    },
  },
};

const NoticiaPost = () => {
  const { slug } = useParams();
  const loaderData = useLoaderData();
  const [state, setState] = useState(() => ({
    noticia: loaderData?.noticia || null,
    relacionadas: loaderData?.relacionadas || [],
    status: loaderData?.noticia ? 'ready' : loaderData === undefined ? 'loading' : 'not-found',
  }));

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Re-busca no client pra pegar atualizações pós-build.
  useEffect(() => {
    let cancelled = false;
    sanityClient
      .fetch(NOTICIA_BY_SLUG_QUERY, { slug })
      .then((noticia) => {
        if (cancelled) return;
        if (!noticia) {
          setState((prev) => ({ ...prev, status: prev.noticia ? prev.status : 'not-found' }));
          return;
        }
        setState((prev) => ({ ...prev, noticia, status: 'ready' }));
        return sanityClient
          .fetch(NOTICIAS_RELACIONADAS_QUERY, { slug, categoria: noticia.categoria })
          .catch(() => []);
      })
      .then((rel) => {
        if (cancelled || !rel) return;
        setState((prev) => ({ ...prev, relacionadas: rel }));
      })
      .catch(() => {
        if (cancelled) return;
        setState((prev) => ({ ...prev, status: prev.noticia ? 'ready' : 'error' }));
      });
    return () => { cancelled = true; };
  }, [slug]);

  const { noticia, relacionadas, status } = state;
  const metaTitle = noticia?.metaTitle || noticia?.titulo;
  const metaDescription = noticia?.metaDescription || noticia?.resumo;
  const ogImage = noticia?.capa ? urlForImage(noticia.capa).width(1200).height(630).fit('crop').auto('format').url() : null;
  const canonical = noticia ? `${SITE_URL}/noticias/${noticia.slug || slug}` : null;

  return (
    <div className="monteo-app noticia-page">
      {noticia && (
        <Helmet>
          <title>{`${metaTitle} | Monteo`}</title>
          <meta name="description" content={metaDescription} />
          {canonical && <link rel="canonical" href={canonical} />}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDescription} />
          {canonical && <meta property="og:url" content={canonical} />}
          {ogImage && <meta property="og:image" content={ogImage} />}
          {ogImage && <meta property="og:image:secure_url" content={ogImage} />}
          {ogImage && <meta property="og:image:type" content="image/jpeg" />}
          {ogImage && <meta property="og:image:width" content="1200" />}
          {ogImage && <meta property="og:image:height" content="630" />}
          {ogImage && (
            <meta
              property="og:image:alt"
              content={noticia.capa?.alt || noticia.titulo}
            />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          {ogImage && <meta name="twitter:image" content={ogImage} />}
          <meta name="twitter:title" content={metaTitle} />
          <meta name="twitter:description" content={metaDescription} />
          <meta property="article:published_time" content={noticia.publicadoEm} />
          <meta property="article:section" content={CATEGORIA_LABELS[noticia.categoria] || 'Notícia'} />
          {noticia.autor?.nome && <meta property="article:author" content={noticia.autor.nome} />}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
        </Helmet>
      )}
      <Header />
      <main>
        {status === 'loading' && (
          <section className="page-section">
            <div className="container noticia-state">
              <p className="noticia-state-text">Carregando notícia...</p>
            </div>
          </section>
        )}

        {status === 'error' && (
          <section className="page-section">
            <div className="container noticia-state">
              <p className="noticia-state-text">
                Não foi possível carregar essa notícia. Tente novamente mais tarde.
              </p>
              <Link to="/noticias" className="btn btn-outline" style={{ marginTop: 24 }}>
                Voltar às notícias
              </Link>
            </div>
          </section>
        )}

        {status === 'not-found' && (
          <section className="page-section">
            <div className="container noticia-state">
              <p className="noticia-state-text">Notícia não encontrada.</p>
              <Link to="/noticias" className="btn btn-outline" style={{ marginTop: 24 }}>
                Voltar às notícias
              </Link>
            </div>
          </section>
        )}

        {status === 'ready' && noticia && (
          <>
            <section className="post-hero">
              <div className="container post-hero-content">
                <nav className="post-breadcrumb-nav" aria-label="Trilha de navegação">
                  <Link to="/noticias">Notícias</Link>
                  <span className="post-breadcrumb-sep" aria-hidden>|</span>
                  <span>{CATEGORIA_LABELS[noticia.categoria] || 'Notícia'}</span>
                </nav>
                <h1 className="post-title">{noticia.titulo}</h1>
                <p className="post-lede">{noticia.resumo}</p>
                <div className="post-byline">
                  <div className="post-byline-info">
                    {noticia.autor?.foto?.asset && (
                      <img
                        src={urlForImage(noticia.autor.foto)
                          .width(96)
                          .height(96)
                          .fit('crop')
                          .auto('format')
                          .url()}
                        alt={noticia.autor.foto.alt || noticia.autor.nome || ''}
                        className="post-byline-photo"
                        loading="lazy"
                      />
                    )}
                    <div className="post-byline-text">
                      <span className="post-byline-author">
                        {noticia.autor?.nome || 'Equipe Monteo'}
                      </span>
                      <time className="post-byline-time" dateTime={noticia.publicadoEm}>
                        {formatDateTimePtBr(noticia.publicadoEm)}
                      </time>
                    </div>
                  </div>
                  <PostShare
                    url={canonical || `${SITE_URL}/noticias/${noticia.slug || slug}`}
                    title={noticia.titulo}
                  />
                </div>
                <hr className="post-divider" />
              </div>
            </section>

            <section className="page-section post-body-section">
              <div className="container post-body-container">
                <article className="post-body">
                  {noticia.capa?.asset && (
                    <figure className="post-cover-inline">
                      <img
                        src={urlForImage(noticia.capa)
                          .width(1000)
                          .height(800)
                          .fit('crop')
                          .auto('format')
                          .url()}
                        alt={noticia.capa.alt || noticia.titulo}
                      />
                      {noticia.capa.legenda && (
                        <figcaption>{noticia.capa.legenda}</figcaption>
                      )}
                    </figure>
                  )}
                  <PortableText value={noticia.corpo || []} components={portableComponents} />
                </article>
              </div>
            </section>

            {relacionadas.length > 0 && (
              <section className="page-section page-section--alt">
                <div className="container">
                  <span className="label section-label">Leia também</span>
                  <h2 className="section-title">Mais em {CATEGORIA_LABELS[noticia.categoria]}</h2>
                  <div className="noticia-grid">
                    {relacionadas.map((n) => (
                      <NoticiaCard key={n._id} noticia={n} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaPost;
