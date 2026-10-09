import React from 'react';
import { BookingWizard } from '../components/booking/BookingWizard';
import { ShieldCheck } from 'lucide-react';
import { DEMO_CONFIG } from '../config/demo';

export const BookingPage: React.FC = () => {
  return (
    <div className="section-wrapper" style={{ paddingTop: '3.5rem', minHeight: '80vh' }}>
      <div className="site-container">
        {/* Cabecera del Flujo de Reserva */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge badge-demo">
              <ShieldCheck size={14} />
              <span>SIMULADOR DE AGENDAMIENTO KUYÉNDEV</span>
            </span>
          </div>

          <h1
            style={{
              fontSize: 'var(--text-h2)',
              marginBottom: '0.85rem',
              lineHeight: '1.1',
            }}
          >
            Agenda Tu Experiencia en <span className="serif-italic copper-text">Atelier 47</span>
          </h1>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
            {DEMO_CONFIG.bookingNotice}
          </p>
        </div>

        {/* Wizard Interactivo */}
        <BookingWizard />
      </div>
    </div>
  );
};
