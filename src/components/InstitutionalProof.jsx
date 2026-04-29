import React, { useEffect, useRef, useState } from 'react';
import { animate as anime } from 'animejs';
import './InstitutionalProof.css';
const StatCounter = ({
  value,
  suffix,
  duration = 2000,
  integerPtBR = false,
  scaleBillions = false
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasPlayedRef = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const parsed = parseFloat(value);
    if (Number.isNaN(parsed)) return undefined;
    const target = scaleBillions ? parsed * 1e9 : parsed;
    hasPlayedRef.current = false;
    setCount(0);
    const run = () => {
      const obj = { val: 0 };
      anime(obj, {
        val: [0, target],
        duration,
        easing: 'outExpo',
        onUpdate: () => setCount(obj.val),
        onComplete: () => setCount(target)
      });
    };
    const observer = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting || hasPlayedRef.current) return;
      hasPlayedRef.current = true;
      run();
      observer.disconnect();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, scaleBillions]);
  const fractionDigits = (() => {
    if (scaleBillions) return 0;
    const s = String(value);
    if (!s.includes('.')) return 0;
    return s.split('.')[1].length;
  })();
  const display = (() => {
    if (scaleBillions) {
      const b = count / 1e9;
      return b.toLocaleString('pt-BR', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      });
    }
    if (integerPtBR && fractionDigits === 0) {
      return Math.round(count).toLocaleString('pt-BR');
    }
    return fractionDigits > 0 ? count.toFixed(fractionDigits) : Math.round(count);
  })();
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};
const InstitutionalProof = () => {
  return (
    <section className="institutional-proof">
      <div className="container proof-grid">
        <div className="proof-main">
          <span className="label">AUTORIDADE CONQUISTADA</span>
          <div className="proof-main-stats-row">
            <div className="proof-main-stat">
              <h2 className="main-number">
                <StatCounter value="1.5" suffix=" Bi" scaleBillions />
              </h2>
              <p className="main-desc main-desc--emph">EM CARTAS DE CRÉDITO SOB ASSESSORIA.</p>
            </div>
            <div className="proof-main-stat">
              <h2 className="main-number">
                <StatCounter value="3500" suffix="" integerPtBR />
              </h2>
              <p className="main-desc main-desc--emph">CLIENTES ATENDIDOS.</p>
            </div>
          </div>
        </div>
        <div className="proof-secondary">
          <div className="stat-item glass-card reveal-up">
            <h3 className="stat-number">
              <StatCounter value="25" suffix="k+" />
            </h3>
            <p className="stat-label">CLIENTES ATIVOS</p>
          </div>
          <div className="stat-item glass-card reveal-up">
            <h3 className="stat-number">98%</h3>
            <p className="stat-label">ÍNDICE DE NPS</p>
          </div>
          <div className="stat-item glass-card reveal-up">
            <h3 className="stat-number">GPTW</h3>
            <p className="stat-label">EXCELÊNCIA EM CULTURA</p>
          </div>
          <div className="stat-item glass-card reveal-up">
            <h3 className="stat-number">15</h3>
            <p className="stat-label">ANOS DE ATUAÇÃO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstitutionalProof;
