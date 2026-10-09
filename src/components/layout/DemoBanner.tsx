import React, { useState } from 'react';
import { Sparkles, Info, X } from 'lucide-react';
import { DEMO_CONFIG } from '../../config/demo';

export const DemoBanner: React.FC = () => {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <div 
        style={{
          position: 'fixed',
          top: '12px',
          right: '12px',
          zIndex: 9999,
          background: 'rgba(28, 27, 25, 0.9)',
          border: '1px solid var(--color-accent-copper)',
          borderRadius: 'var(--radius-pill)',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-md)',
          backdropFilter: 'blur(8px)',
        }}
        onClick={() => setMinimized(false)}
        title="Ver detalles del modo demostración"
      >
        <Sparkles size={14} color="var(--color-accent-copper)" />
        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
          MODO DEMOSTRACIÓN
        </span>
      </div>
    );
  }

  return (
    <aside 
      aria-label="Aviso de demostración"
      style={{
        backgroundColor: '#161513',
        borderBottom: '1px solid rgba(183, 122, 86, 0.3)',
        padding: '0.45rem 1rem',
        fontSize: '0.78rem',
        color: 'var(--color-text-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 999,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textAlign: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '4px',
          color: 'var(--color-accent-copper)', 
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
          <Info size={13} /> KuyénDev Showcase:
        </span>
        <span>{DEMO_CONFIG.bannerText}</span>
      </div>
      <button
        onClick={() => setMinimized(true)}
        aria-label="Minimizar aviso de demostración"
        style={{
          position: 'absolute',
          right: '1rem',
          display: 'flex',
          alignItems: 'center',
          color: 'var(--color-text-muted)',
          padding: '2px',
        }}
      >
        <X size={14} />
      </button>
    </aside>
  );
};
