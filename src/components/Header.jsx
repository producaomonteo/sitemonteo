import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { animate as anime } from 'animejs';
import logoGptw from '@Imagens/GPTW Quadrado.png';
import logoMonteo from '@Imagens/LOGO 2025 HORIZONTAL BRANCO-8.png';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  const linksRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktopNav, setIsDesktopNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1181px)').matches
  );

  useEffect(() => {
    if (headerRef.current) {
      anime(headerRef.current, {
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: 'easeOutExpo',
        delay: 200
      });
    }
  }, []);

  useEffect(() => {
    if (!isDesktopNav) return undefined;

    const moveLink = (e, item) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      anime(item, {
        translateX: x * 0.3,
        translateY: y * 0.3,
        duration: 400,
        easing: 'easeOutElastic(1, .6)'
      });
    };

    const resetLink = (item) => {
      anime(item, {
        translateX: 0,
        translateY: 0,
        duration: 800,
        easing: 'easeOutElastic(1, .6)'
      });
    };

    const bound = [];
    linksRef.current.forEach((link) => {
      if (!link) return;
      const onMove = (e) => moveLink(e, link);
      const onLeave = () => resetLink(link);
      link.addEventListener('mousemove', onMove);
      link.addEventListener('mouseleave', onLeave);
      bound.push({ link, onMove, onLeave });
    });

    return () => {
      bound.forEach(({ link, onMove, onLeave }) => {
        link.removeEventListener('mousemove', onMove);
        link.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [isDesktopNav]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1181px)');
    const sync = () => {
      setIsDesktopNav(mq.matches);
      if (mq.matches) setMenuOpen(false);
    };
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Alavancagem', href: '#' },
    { name: 'Mex Club', href: '#' },
    { name: 'Conteúdos', href: '#' },
    { name: 'Resultados', href: '#' },
    { name: 'Sobre nós', href: '#' }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header glass-card">
      <div className="header-motion" ref={headerRef}>
        <div className="header-container">
          <div className="logo-section">
            <img
              src={logoGptw}
              alt="Great Place to Work"
              className="logo-gptw"
              decoding="async"
            />
            <img src={logoMonteo} alt="Monteo Investimentos" className="logo" />
          </div>

          <nav className="nav nav-desktop" aria-label="Principal">
            <ul className="nav-list">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    ref={(el) => {
                      linksRef.current[i] = el;
                    }}
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-ctas header-ctas-desktop">
            <button type="button" className="btn btn-outline btn-sm header-cta-btn">
              Acesse
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm header-cta-btn header-cta-btn--primary"
            >
              Invista com a Monteo
            </button>
          </div>

          <button
            type="button"
            className={`header-menu-btn${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="header-menu-bar" aria-hidden />
            <span className="header-menu-bar" aria-hidden />
            <span className="header-menu-bar" aria-hidden />
          </button>
        </div>
      </div>

      {menuOpen &&
        createPortal(
          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
            <button type="button" className="mobile-menu-backdrop" aria-label="Fechar menu" onClick={closeMenu} />
            <div className="mobile-menu-panel">
              <nav className="mobile-menu-nav" aria-label="Principal">
                <ul className="mobile-menu-list">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="mobile-menu-link" onClick={closeMenu}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mobile-menu-ctas">
                <button type="button" className="btn btn-outline btn-sm btn-block">
                  Acesse
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-block header-cta-btn header-cta-btn--primary"
                >
                  Invista com a Monteo
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
