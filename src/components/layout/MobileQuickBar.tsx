import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Scissors } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';
import { formatPriceClp } from '../../utils/format';

export const MobileQuickBar: React.FC = () => {
  const location = useLocation();
  const { state, totalPrice } = useBooking();

  // No mostrar la barra si ya estamos en la página de booking
  if (location.pathname === '/booking') {
    return null;
  }

  const hasSelectedServices = state.selectedServices.length > 0;

  return (
    <div
      className="mobile-bottom-bar"
      style={{
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {hasSelectedServices ? (
          <div>
            <span style={{ fontSize: '0.72rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {state.selectedServices.length} {state.selectedServices.length === 1 ? 'servicio' : 'servicios'}
            </span>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-highlight)' }}>
              {formatPriceClp(totalPrice)}
            </div>
          </div>
        ) : (
          <Link
            to="/services"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              fontWeight: 600,
            }}
          >
            <Scissors size={15} color="var(--color-accent-copper)" />
            <span>Ver servicios</span>
          </Link>
        )}
      </div>

      <Link
        to="/booking"
        className="btn btn-primary"
        style={{
          padding: '0.7rem 1.3rem',
          fontSize: '0.82rem',
        }}
      >
        <Calendar size={15} />
        <span>{hasSelectedServices ? 'Continuar agenda' : 'Agendar cita'}</span>
      </Link>
    </div>
  );
};
