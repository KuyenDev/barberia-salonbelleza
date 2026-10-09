import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      className="section-wrapper"
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="site-container" style={{ maxWidth: '580px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'rgba(183, 122, 86, 0.15)',
            color: 'var(--color-accent-copper)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
          }}
        >
          <Scissors size={32} />
        </div>

        <h1
          style={{
            fontSize: 'var(--text-h1)',
            marginBottom: '1rem',
            color: 'var(--color-text-highlight)',
          }}
        >
          404 &bull; Página No Encontrada
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.6',
            marginBottom: '2rem',
          }}
        >
          La ruta que buscas no existe o ha sido reubicada dentro del estudio. Puedes regresar al inicio o explorar nuestro catálogo de servicios.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={16} />
            <span>Volver al Inicio</span>
          </Link>
          <Link to="/services" className="btn btn-secondary">
            <span>Ver Servicios</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
