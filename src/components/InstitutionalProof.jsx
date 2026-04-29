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
      <div className="container">
        <span className="label proof-label">AUTORIDADE CONQUISTADA</span>
        <div className="proof-stats-grid">
          <div className="proof-stat-item">
            <h2 className="proof-stat-number">
              R$&nbsp;<StatCounter value="1.5" suffix=" Bi" scaleBillions />
            </h2>
            <p className="proof-stat-desc">em cartas de crédito sob assessoria</p>
          </div>
          <div className="proof-stat-divider" aria-hidden />
          <div className="proof-stat-item">
            <h2 className="proof-stat-number">
              <StatCounter value="3500" suffix="" integerPtBR />
            </h2>
            <p className="proof-stat-desc">clientes atendidos</p>
          </div>
          <div className="proof-stat-divider" aria-hidden />
          <div className="proof-stat-item">
            <h2 className="proof-stat-number">
              <StatCounter value="15" suffix="" />
            </h2>
            <p className="proof-stat-desc">anos de atuação</p>
          </div>
          <div className="proof-stat-divider" aria-hidden />
          <div className="proof-stat-item">
            <h2 className="proof-stat-number proof-stat-number--text">GPTW</h2>
            <p className="proof-stat-desc">Selo Great Place to Work</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InstitutionalProof;
