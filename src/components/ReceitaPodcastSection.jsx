import React, { useEffect, useState } from 'react';
import './ReceitaPodcastSection.css';

const SHOW_URL = 'https://open.spotify.com/show/0sdIxUVCJCCDJhhupdRFW6?si=a8f59b43cdea47dd';

/** Episódios públicos do show (IDs extraídos do perfil Spotify). */
const RECEITA_EPISODE_IDS = [
  '5UX8WsHUusNB1bJdkcbhZ1',
  '6bpXWwtHTmS8QNbMXjG9S6',
  '6mY3LEnhuLiqNWW7TMHn49',
  '3NWve9nsjcNp3SEK665JQf',
  '1t2p9CTNqrwf40ZqZKCdsf',
  '5NziGQn8aX4rnb2qWDBVVN',
  '1d2FWR8iePmdCR3Eedbhak',
  '3fofP9jVMnRpKOAAGHAYET',
  '6MUwQSfoPk6zpTdP8HrdD9',
  '5Pe3jz8lPuw1lxi5yUCkvf',
  '5hA5BCHMJKMEN4cOvoTxGx',
  '5RYSDQ7V3GcRQuTsDEE7XZ'
];

async function fetchEpisodeOembed(episodeId) {
  const pageUrl = `https://open.spotify.com/episode/${episodeId}`;
  const oembed = `https://open.spotify.com/oembed?url=${encodeURIComponent(pageUrl)}`;
  const res = await fetch(oembed);
  if (!res.ok) return null;
  const data = await res.json();
  return {
    id: episodeId,
    title: data.title || 'Episódio',
    thumbnailUrl: data.thumbnail_url || '',
    iframeUrl: data.iframe_url || `https://open.spotify.com/embed/episode/${episodeId}`
  };
}

const ReceitaPodcastSection = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loadStatus, setLoadStatus] = useState('idle');
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      setLoadStatus('loading');
      try {
        const settled = await Promise.all(RECEITA_EPISODE_IDS.map((id) => fetchEpisodeOembed(id)));
        const ok = settled.filter(Boolean);
        if (cancelled) return;
        setEpisodes(ok);
        setActiveId(ok[0]?.id ?? null);
        setLoadStatus(ok.length ? 'ready' : 'empty');
      } catch {
        if (!cancelled) setLoadStatus('error');
      }
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const active = episodes.find((e) => e.id === activeId) ?? episodes[0];

  return (
    <section className="receita-podcast-section mesh-bg" aria-labelledby="receita-podcast-heading">
      <div className="container">
        <header className="receita-intro section-header">
          <span className="label">Receita de Sucesso Podcast</span>
          <h2 id="receita-podcast-heading" className="title">
            Grandes nomes do empreendedorismo.
          </h2>
          <p className="subtitle">
            Histórias de liderança e inovação que inspiram o ecossistema.
          </p>
        </header>

        {loadStatus === 'loading' && (
          <p className="receita-status" role="status">
            A carregar episódios do Spotify…
          </p>
        )}

        {(loadStatus === 'error' || loadStatus === 'empty') && (
          <p className="receita-status">
            Não foi possível carregar os episódios aqui.{' '}
            <a href={SHOW_URL} target="_blank" rel="noopener noreferrer">
              Abrir no Spotify
            </a>
          </p>
        )}

        {loadStatus === 'ready' && active && (
          <div className="receita-shell">
            <div className="receita-list-outer receita-list-outer--selector">
              <ul className="receita-list" role="list">
                {episodes.map((ep) => {
                  const isActive = ep.id === active.id;
                  return (
                    <li key={ep.id}>
                      <button
                        type="button"
                        className={`receita-episode${isActive ? ' is-active' : ''}`}
                        onClick={() => setActiveId(ep.id)}
                        aria-current={isActive ? 'true' : undefined}
                        aria-label={`Reproduzir ${ep.title}`}
                      >
                        <span className="receita-episode-thumb-wrap">
                          {ep.thumbnailUrl ? (
                            <img
                              src={ep.thumbnailUrl}
                              alt=""
                              className="receita-episode-thumb"
                              loading="lazy"
                            />
                          ) : (
                            <span className="receita-episode-thumb-fallback" aria-hidden>
                              ▶
                            </span>
                          )}
                        </span>
                        <span className="receita-episode-body">
                          <span className="receita-episode-title">{ep.title}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="receita-player-wrap glass-card">
              <div className="receita-player-chrome">
                <span className="receita-player-badge">Receita de Sucesso</span>
                <span className="receita-player-ep-title">{active.title}</span>
              </div>
              <div className="receita-player-frame">
                <iframe
                  key={active.id}
                  title={active.title}
                  src={active.iframeUrl}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReceitaPodcastSection;
