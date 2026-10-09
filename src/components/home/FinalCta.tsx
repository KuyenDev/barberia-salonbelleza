import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section
      aria-label="Llamado a la acción de agendamiento"
      className="section-wrapper bg-grain"
      style={{
        position: 'relative',
        textAlign: 'center',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container" style={{ position: 'relative', zIndex: 1, maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <span className="badge badge-copper">
            <Sparkles size={12} />
            <span>AGENDA DISPONIBLE &bull; DEMOSTRACIÓN</span>
          </span>
        </div>

        <h2
          style={{
            fontSize: 'var(--text-h1)',
            marginBottom: '1.25rem',
            lineHeight: '1.08',
          }}
        >
          El próximo estilo{' '}
          <span className="serif-italic copper-text">
            puede ser el tuyo.
          </span>
        </h2>

        <p
          style={{
            fontSize: 'var(--text-body-lg)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.7',
            marginBottom: '2.5rem',
          }}
        >
          Experimenta el flujo interactivo de reserva desarrollado para salones y barberías boutique. Selecciona servicios, estilistas y reserva tu cita simulada en segundos.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/booking" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '0.92rem' }}>
            <Calendar size={18} />
            <span>Explorar agenda interactiva</span>
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '1rem 1.8rem', fontSize: '0.92rem' }}>
            <span>Consultar precios y servicios</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
