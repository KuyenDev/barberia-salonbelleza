import React from 'react';
import { SITE_CONFIG } from '../../config/site';

export const BrandManifesto: React.FC = () => {
  return (
    <section
      aria-label="Manifiesto de marca"
      className="section-wrapper"
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Fotografía de detalle de herramientas y espacio */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '100%',
                height: '480px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1517832606589-715753d4be36?auto=format&fit=crop&w=1000&q=80"
                alt="Detalle de navaja y toalla en ritual tradicional"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-accent-copper)',
                padding: '1.25rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-md)',
                maxWidth: '220px',
                display: 'none',
              }}
              className="manifesto-badge"
            >
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent-copper)', fontWeight: 700 }}>
                CRITERIO DE DISEÑO
              </span>
              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-highlight)', marginTop: '4px', lineHeight: '1.4' }}>
                Cada cliente es tratado como un proyecto de autor exclusivo.
              </p>
            </div>
          </div>

          {/* Bloque Editorial */}
          <div>
            <span className="section-eyebrow">NUESTRA VISIÓN</span>

            <h2
              style={{
                fontSize: 'var(--text-h1)',
                marginBottom: '1.75rem',
                lineHeight: '1.08',
              }}
            >
              El estilo no se copia.{' '}
              <span className="serif-italic copper-text">
                Se crea.
              </span>
            </h2>

            <p
              style={{
                fontSize: 'var(--text-body-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
              }}
            >
              {SITE_CONFIG.manifesto.body}
            </p>

            <blockquote
              style={{
                borderLeft: '3px solid var(--color-accent-copper)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.35rem',
                fontStyle: 'italic',
                color: 'var(--color-text-highlight)',
                lineHeight: '1.4',
              }}
            >
              &ldquo;Rechazamos las fórmulas industriales. Diseñamos proporciones, texturas y tonalidades que dialogan orgánicamente con tu personalidad.&rdquo;
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent-gold)' }} />
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent-gold)', fontWeight: 600 }}>
                ATELIER 47 &bull; MANIFIESTO
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .manifesto-badge {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
