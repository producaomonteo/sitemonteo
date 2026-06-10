import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './FinalCTA.css';

// WhatsApp da Tamires — substituir pelo número real
const TAMIRES_WHATSAPP = '5544991158523'; // Formato: 55 + DDD + número

const categories = [
  { label: 'Cliente', origin: 'cliente' },
  { label: 'Franqueado', origin: 'franqueado' },
  { label: 'Parceiro', origin: 'parceiro' },
  { label: 'Profissional de Consórcio', origin: 'profissional-de-consorcio' }
];

const INITIAL_FORM = { name: '', phone: '', email: '' };

const FinalCTA = () => {
  const [activeOrigin, setActiveOrigin] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      const origin = e.detail?.origin || 'cliente';
      openModal(origin);
    };
    window.addEventListener('openCTAModal', handler);
    return () => window.removeEventListener('openCTAModal', handler);
  }, []);
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const activeCat = categories.find((c) => c.origin === activeOrigin);

  const openModal = (origin) => {
    setActiveOrigin(origin);
    setForm(INITIAL_FORM);
    setSubmitted(false);
  };

  const closeModal = () => {
    setActiveOrigin(null);
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    // Envia para Formspree (e-mail)
    try {
      await fetch('https://formspree.io/f/xrevkwne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.name,
          whatsapp: form.phone,
          email: form.email || 'não informado',
          interesse: activeCat?.label,
          data_hora: new Date().toLocaleString('pt-BR')
        })
      });
    } catch (e) {
      console.error('Formspree error:', e);
    }

    // Envia para Google Sheets
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwraNwIN-sqEaTGZva6e-a2YHEI0AJIFK1_9nDAVCNyvlKEQTaWVA0YuLKXCdj7Zzdo/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.name,
          whatsapp: form.phone,
          email: form.email || 'não informado',
          interesse: activeCat?.label,
          data_hora: new Date().toLocaleString('pt-BR')
        })
      });
    } catch (e) {
      console.error('Sheets error:', e);
    }

    // Abre WhatsApp da Tamires
    const msg = encodeURIComponent(
      `Olá! Me chamo *${form.name}* e tenho interesse como *${activeCat?.label}* na Monteo.\n` +
      `📱 Telefone: ${form.phone}\n` +
      `📧 E-mail: ${form.email || 'não informado'}`
    );

    window.open(`https://wa.me/${TAMIRES_WHATSAPP}?text=${msg}`, '_blank', 'noopener');
    setSubmitted(true);
  };

  return (
    <>
      <section className="final-cta">
        <div className="container cta-container">
          <div className="cta-header reveal-up active">
            <span className="label">O SEU PRÓXIMO PASSO</span>
            <h2 className="title">Qual é o seu próximo passo dentro da Monteo?</h2>
            <p className="subtitle">Escolha sua porta de entrada e comece a transformar sua operação hoje mesmo.</p>
          </div>
          <div className="cta-grid">
            {categories.map((cat, i) => (
              <button
                key={cat.origin}
                type="button"
                className={`btn cta-btn${i === 0 ? ' btn-primary' : ' btn-outline'}`}
                onClick={() => openModal(cat.origin)}
              >
                <span className="cta-btn-icon">{cat.icon}</span>
                {cat.label.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeOrigin &&
        createPortal(
          <div className="cta-modal" role="dialog" aria-modal="true" aria-labelledby="cta-modal-title">
            <button
              type="button"
              className="cta-modal-backdrop"
              aria-label="Fechar"
              onClick={closeModal}
            />
            <div className="cta-modal-panel glass-card">
              <button
                type="button"
                className="cta-modal-close"
                aria-label="Fechar"
                onClick={closeModal}
              >
                ×
              </button>

              {submitted ? (
                <div className="cta-modal-success">
                  <div className="cta-modal-success-icon">✓</div>
                  <h3>Tudo certo!</h3>
                  <p>Você será redirecionado para o WhatsApp da Tamires. Aguarde o contato da equipe Monteo em breve.</p>
                  <button type="button" className="btn btn-primary btn-block" onClick={closeModal}>
                    Fechar
                  </button>
                </div>
              ) : (
                <>
                  <div className="cta-modal-header">
                    <span className="label">{activeCat?.icon} {activeCat?.label.toUpperCase()}</span>
                    <h3 id="cta-modal-title">Quero crescer com a Monteo</h3>
                    <p>Preencha seus dados e nossa equipe entrará em contato.</p>
                  </div>

                  <form className="cta-form" onSubmit={handleSubmit} noValidate>
                    <div className="cta-form-group">
                      <label htmlFor="cta-name">Nome completo *</label>
                      <input
                        id="cta-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="cta-phone">WhatsApp *</label>
                      <input
                        id="cta-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                        autoComplete="tel"
                      />
                    </div>
                    <div className="cta-form-group">
                      <label htmlFor="cta-email">E-mail</label>
                      <input
                        id="cta-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        autoComplete="email"
                      />
                    </div>

                    <input type="hidden" name="origem" value={activeOrigin} />

                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      disabled={!form.name || !form.phone}
                    >
                      Quero crescer com a Monteo →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default FinalCTA;
