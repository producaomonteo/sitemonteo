import React, { useState } from 'react';
import './PostShare.css';

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="5 12 10 17 19 7" />
  </svg>
);

const PostShare = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const liveUrl = typeof window !== 'undefined' ? window.location.href : url;
    // Tenta API nativa (celular, Safari): abre bandeja do sistema.
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, url: liveUrl });
        return;
      } catch (err) {
        // Usuário cancelou: nada a fazer.
        if (err?.name === 'AbortError') return;
      }
    }
    // Fallback: copia link.
    try {
      await navigator.clipboard.writeText(liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silencioso: alguns navegadores em http ou sem permissão.
    }
  };

  return (
    <div className="post-share">
      <button
        type="button"
        onClick={handleShare}
        className={`post-share-btn${copied ? ' is-copied' : ''}`}
        aria-label={copied ? 'Link copiado' : 'Compartilhar'}
      >
        {copied ? <CheckIcon /> : <ShareIcon />}
        <span className="post-share-label">
          {copied ? 'Link copiado' : 'Compartilhar'}
        </span>
      </button>
    </div>
  );
};

export default PostShare;
