import React, { useRef } from 'react';
import logoReceita from '../assets/images/logo-receita-sucesso.png';
import cLuiza from '../assets/images/convidado-luiza-helena.webp';
import cJoel from '../assets/images/convidado-joel-jota.webp';
import cCaio from '../assets/images/convidado-caio-carneiro.webp';
import cGeraldo from '../assets/images/convidado-geraldo-rufino.webp';
import cAlfredo from '../assets/images/convidado-alfredo-soares.webp';
import cGustavo from '../assets/images/convidado-gustavo-cerbasi.webp';
import './ReceitaPodcastSection.css';

const SPOTIFY_URL = 'https://open.spotify.com/show/0sdIxUVCJCCDJhhupdRFW6';
const YOUTUBE_URL = 'https://www.youtube.com/@receitadesucessopodcast/videos';

const convidados = [
  { name: 'Alfredo Soares', src: cAlfredo },
  { name: 'Joel Jota', src: cJoel },
  { name: 'Gustavo Cerbasi', src: cGustavo },
  { name: 'Luiza Helena Trajano', src: cLuiza },
  { name: 'Caio Carneiro', src: cCaio },
  { name: 'Geraldo Rufino', src: cGeraldo },
];

const ReceitaPodcastSection = () => {
  const trackRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const scrollByCards = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector('.receita-slide');
    const gap = 20;
    const amount = slide ? slide.offsetWidth + gap : track.offsetWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  // Arrastar com o mouse (desktop). No celular, o arraste com o dedo
  // já funciona de forma nativa pela rolagem horizontal.
  const handleDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    isDown.current = true;
    startX.current = e.pageX;
    startScroll.current = track.scrollLeft;
    track.classList.add('is-dragging');
  };

  const handleMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const track = trackRef.current;
    track.scrollLeft = startScroll.current - (e.pageX - startX.current);
  };

  const handleUp = () => {
    isDown.current = false;
    trackRef.current?.classList.remove('is-dragging');
  };

  return (
    <section className="receita-section mesh-bg">
      <div className="container">
        <div className="section-header reveal-up active receita-topheader">
          <span className="label">CONTEÚDO</span>
          <h2 className="title">Podcast</h2>
        </div>
        <div className="receita-inner">
          <div className="receita-header">
          <img src={logoReceita} alt="Receita de Sucesso Podcast" className="receita-logo" />
          <p className="receita-desc">
            Nossos fundadores entrevistam alguns dos maiores nomes do empreendedorismo
            e desenvolvimento pessoal do Brasil.
          </p>
          <div className="receita-btns">
            <a
              href={SPOTIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="receita-platform-btn receita-platform-btn--spotify"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Ouvir no Spotify
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="receita-platform-btn receita-platform-btn--youtube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Ver no YouTube
            </a>
          </div>
        </div>

        <div className="receita-carousel-wrap">
        <div className="receita-carousel">
          <button
            type="button"
            className="receita-arrow receita-arrow--prev"
            onClick={() => scrollByCards(-1)}
            aria-label="Ver convidados anteriores"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="receita-track"
            ref={trackRef}
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onMouseUp={handleUp}
            onMouseLeave={handleUp}
          >
            {convidados.map((c) => (
              <div className="receita-slide" key={c.name}>
                <img
                  src={c.src}
                  alt={`${c.name} no Receita de Sucesso Podcast`}
                  className="receita-slide-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            className="receita-arrow receita-arrow--next"
            onClick={() => scrollByCards(1)}
            aria-label="Ver mais convidados"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <p className="receita-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5l-7 7 7 7" />
            <path d="M12 5l7 7-7 7" />
          </svg>
          Arraste para o lado
        </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ReceitaPodcastSection;
