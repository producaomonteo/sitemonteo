import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './PageHero.css';
import './Blog.css';

const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="monteo-app">
      <Header />
      <main>
        <section className="page-hero">
          <div className="page-hero-overlay" />
          <div className="container page-hero-content">
            <span className="label">Conteúdo</span>
            <h1 className="page-hero-title">Blog Monteo</h1>
            <p className="page-hero-subtitle">Estratégia, mercado e conhecimento para quem quer crescer com inteligência.</p>
          </div>
        </section>

        <section className="page-section">
          <div className="container blog-coming-soon">
            <div className="blog-soon-card glass-card">
              <span className="blog-soon-icon">✦</span>
              <h2 className="blog-soon-title">Em breve</h2>
              <p className="blog-soon-text">Estamos preparando conteúdos exclusivos sobre consórcio, patrimônio e estratégia financeira. Volte em breve.</p>
              <Link to="/" className="btn btn-primary">Voltar para o início</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
