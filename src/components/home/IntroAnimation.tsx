import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../../config/site';

export const IntroAnimation: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Si el usuario ya vio la intro en la sesión o prefiere movimiento reducido, no mostrar
    const hasSeen = sessionStorage.getItem('atelier47_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasSeen && !prefersReducedMotion) {
      setVisible(true);
      sessionStorage.setItem('atelier47_intro_seen', 'true');

      // Auto desvanecer tras 1.4 segundos para no bloquear la experiencia
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#111110',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'opacity 0.5s ease',
      }}
    >
      <div style={{ textAlign: 'center', animation: 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.6rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: 'var(--color-text-highlight)',
            }}
          >
            ATELIER
          </span>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: 'var(--color-accent-copper)',
            }}
          >
            47
          </span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-gold)',
            marginTop: '0.5rem',
          }}
        >
          {SITE_CONFIG.brandDescriptor}
        </p>
      </div>

      <span style={{ position: 'absolute', bottom: '2rem', fontSize: '0.72rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
        Haz clic para continuar &bull; Demostración
      </span>
    </div>
  );
};
