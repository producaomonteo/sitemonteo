import React, { useEffect, useRef } from 'react';
import { animate, createTimeline, stagger } from 'animejs';
import heroRecepcao from '@Imagens/recepcao-monteo-4.png';
import heroWordmark from '@Imagens/LOGO-2025-HORIZONTAL-PRETO-8-Editado.svg';
import './Hero.css';

const Hero = () => {
  const contentRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    // Staggered Entrance Animation
    const timeline = createTimeline({
      defaults: {
        easing: 'easeOutExpo',
      }
    });

    timeline
      .add('.hero-bg', {
        opacity: [0, 1],
        scale: [1.1, 1],
        duration: 2000,
      })
      .add('.stagger-text', {
        translateY: [40, 0],
        opacity: [0, 1],
        delay: stagger(150),
        duration: 1200,
      }, '-=1500')
      .add('.hero-btns .btn', {
        translateY: [20, 0],
        opacity: [0, 1],
        delay: stagger(100),
        duration: 1000,
      }, '-=800');

    // Light Beam animation
    animate('.light-beam', {
      translateX: ['-100%', '200%'],
      easing: 'easeInOutQuad',
      duration: 3000,
      loop: true,
      delay: 2000
    });
  }, []);

  return (
    <section className="hero mesh-bg">
      <div className="hero-bg-container">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroRecepcao})` }}></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content" ref={contentRef}>
        <div className="hero-text-wrapper">

          <h1 className="hero-title stagger-text" ref={titleRef}>
            <img
              src={heroWordmark}
              alt="Monteo"
              className="hero-title-logo"
              decoding="async"
            />
            <div className="light-beam"></div>
          </h1>
          <p className="hero-headline stagger-text">
            O Ecossistema que está transformando o mercado de consórcios no Brasil.
          </p>
          <p className="hero-subtitle stagger-text">
            Estrutura, método e estratégia para crescimento patrimonial.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">FALAR COM ESPECIALISTA</button>
<button className="btn btn-outline">QUERO CRESCER COM A MONTEO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
