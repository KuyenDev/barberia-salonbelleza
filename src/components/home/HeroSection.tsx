import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-label="Presentación principal"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '3rem',
        paddingBottom: '5rem',
      }}
      className="bg-grain"
    >
      <div className="site-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid-layout"
        >
          {/* Columna de Texto Editorial */}
          <div style={{ maxWidth: '640px' }} className="animate-slide-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge badge-copper">
                <Sparkles size={12} />
                <span>ESTUDIO BOUTIQUE CONTEMPORÁNEO</span>
              </span>
            </div>

            <h1
              style={{
                fontSize: 'var(--text-hero)',
                lineHeight: '1.02',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '-0.03em',
              }}
            >
              YOUR STYLE.{' '}
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-accent-copper)',
                  letterSpacing: 'normal',
                }}
              >
                REDEFINED.
              </span>
            </h1>

            <p
              style={{
                fontSize: 'var(--text-body-lg)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.65',
                marginBottom: '2.5rem',
                maxWidth: '540px',
              }}
            >
              {SITE_CONFIG.heroSubtitle} Un espacio donde la técnica de la barbería clásica se fusiona con la vanguardia del estilismo editorial.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/booking" className="btn btn-primary" style={{ padding: '0.95rem 1.8rem' }}>
                <Calendar size={17} />
                <span>Reservar una cita</span>
              </Link>

              <Link to="/services" className="btn btn-outline" style={{ padding: '0.95rem 1.8rem' }}>
                <span>Explorar servicios</span>
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Micro-datos de prestigio ficticio */}
            <div
              style={{
                display: 'flex',
                gap: '2.5rem',
                marginTop: '3.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div>
                <span style={{ display: 'block', fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-text-highlight)' }}>
                  100%
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Atención Personalizada
                </span>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-accent-copper)' }}>
                  05
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Categorías de Especialidad
                </span>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'var(--color-accent-gold)' }}>
                  47
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Minutos Promedio Ritual
                </span>
              </div>
            </div>
          </div>

          {/* Columna de Fotografía Asimétrica Editorial */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="hero-image-wrapper"
          >
            {/* Marco principal de fotografía */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                height: '560px',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente y estilismo editorial en Atelier 47"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'contrast(1.05) brightness(0.95)',
                }}
              />

              {/* Degradado sutil */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 17, 16, 0.7) 0%, transparent 60%)',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  color: 'var(--color-text-highlight)',
                }}
              >
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent-gold)' }}>
                  ESTUDIO SANTIAGO
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginTop: '2px' }}>
                  Arquitectura, silencio y dedicación absoluta.
                </h3>
              </div>
            </div>

            {/* Tarjeta flotante complementaria con detalle de estilismo */}
            <div
              style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-20px',
                width: '200px',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '2px solid var(--color-accent-copper)',
                boxShadow: 'var(--shadow-md)',
                display: 'none',
              }}
              className="floating-hero-card"
            >
              <img
                src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=600&q=80"
                alt="Técnica de coloración y balayage couture"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Indicador de desplazamiento sutil */}
        <div
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
            color: 'var(--color-text-muted)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>Descubre el estudio</span>
          <ChevronDown size={16} color="var(--color-accent-copper)" />
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid-layout {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
          .floating-hero-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
