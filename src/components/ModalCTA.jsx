import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../components/FinalCTA.css';

const TAMIRES_WHATSAPP = '5544991158523';

const categories = [
  { label: 'Cliente', origin: 'cliente' },
  { label: 'Franqueado', origin: 'franqueado' },
  { label: 'Parceiro', origin: 'parceiro' },
  { label: 'Profissional de Consórcio', origin: 'profissional-de-consorcio' }
];

const INITIAL_FORM = { name: '', phone: '', email: '' };

const ModalCTA = () => {
  const [activeOrigin, setActiveOrigin] = useState(null);
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

  useEffect(() => {
    const handler = (e) => {
      const origin = e.detail?.origin || 'cliente';
      openModal(origin);
    };
    window.addEventListener('openCTAModal', handler);
    return () => window.removeEventListener('openCTAModal', handler);
  }, []);

  useEffect(() => {
    if (!activeOrigin) return;
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [activeOrigin]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    try {
      await fetch('https://formspree.io/f/xrevkwne', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.name, whatsapp: form.phone,
          email: form.email || 'não informado',
          interesse: activeCat?.label,
          data_hora: new Date().toLocaleString('pt-BR')
        })
      });
    } catch (e) { console.error(e); }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwraNwIN-sqEaTGZva6e-a2YHEI0AJIFK1_9nDAVCNyvlKEQTaWVA0YuLKXCdj7Zzdo/exec', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.name, whatsapp: form.phone,
          email: form.email || 'não informado',
          interesse: activeCat?.label,
          data_hora: new Date().toLocaleString('pt-BR')
        })
      });
    } catch (e) { console.error(e); }

    const msg = encodeURIComponent(
      `Olá! Me chamo *${form.name}* e tenho interesse como *${activeCat?.label}* na Monteo.\n` +
      `📱 Telefone: ${form.phone}\n` +
      `📧 E-mail: ${form.email || 'não informado'}`
    );
    window.open(`https://wa.me/${TAMIRES_WHATSAPP}?text=${msg}`, '_blank', 'noopener');
    setSubmitted(true);
  };

  if (!activeOrigin) return null;

  return createPortal(
    <div className="cta-modal" role="dialog" aria-modal="true">
      <button type="button" className="cta-modal-backdrop" onClick={closeModal} />
      <div className="cta-modal-panel">
        <button type="button" className="cta-modal-close" onClick={closeModal}>×</button>
        {submitted ? (
          <div className="cta-modal-success">
            <div className="cta-modal-success-icon">✓</div>
            <h3>Tudo certo!</h3>
            <p>Você será redirecionado para o WhatsApp. Aguarde o contato da equipe Monteo.</p>
            <button type="button" className="btn btn-primary btn-block" onClick={closeModal}>Fechar</button>
          </div>
        ) : (
          <>
            <div className="cta-modal-header">
              <span className="label">{activeCat?.label.toUpperCase()}</span>
              <h3>Quero crescer com a Monteo</h3>
              <p>Preencha seus dados e nossa equipe entrará em contato.</p>
            </div>
            <form className="cta-form" onSubmit={handleSubmit} noValidate>
              <div className="cta-form-group">
                <label htmlFor="m-name">Nome completo *</label>
                <input id="m-name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Seu nome" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="m-phone">WhatsApp *</label>
                <input id="m-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(00) 00000-0000" required />
              </div>
              <div className="cta-form-group">
                <label htmlFor="m-email">E-mail</label>
                <input id="m-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="seu@email.com" />
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={!form.name || !form.phone}>
                Quero crescer com a Monteo →
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ModalCTA;
