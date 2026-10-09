import React from 'react';
import { Clock, DollarSign, User, Calendar as CalendarIcon, Scissors, X, AlertCircle } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';
import { PROFESSIONALS } from '../../data/professionals';
import { formatPriceClp, formatDuration, formatDateDisplay } from '../../utils/format';
import { DEMO_CONFIG } from '../../config/demo';

export const BookingSummaryCard: React.FC = () => {
  const { state, totalPrice, totalDuration, removeService, resetBooking } = useBooking();

  const selectedProfessional = PROFESSIONALS.find(
    (p) => p.id === state.selectedProfessionalId
  );

  return (
    <aside
      aria-label="Resumen de reserva"
      className="card-dark"
      style={{
        position: 'sticky',
        top: '90px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.4rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.85rem' }}>
        <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-highlight)' }}>
          Resumen de Cita
        </h3>
        <span className="badge badge-demo">Simulación</span>
      </div>

      {/* Servicios Seleccionados */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-copper)', fontWeight: 700, marginBottom: '0.6rem' }}>
          <Scissors size={14} /> Servicios ({state.selectedServices.length})
        </div>

        {state.selectedServices.length === 0 ? (
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            Aún no has seleccionado ningún servicio.
          </p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {state.selectedServices.map((service) => (
              <li
                key={service.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0.65rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ maxWidth: '75%' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {service.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {formatDuration(service.durationMinutes)} &bull; {formatPriceClp(service.priceClp)}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeService(service.id)}
                  aria-label={`Eliminar ${service.name}`}
                  style={{
                    color: 'var(--color-text-muted)',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'color var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FF6B6B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  <X size={15} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Profesional Asignado */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-copper)', fontWeight: 700, marginBottom: '0.4rem' }}>
          <User size={14} /> Profesional
        </div>
        <div style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          {selectedProfessional ? (
            <>
              <img
                src={selectedProfessional.image}
                alt={selectedProfessional.name}
                style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <strong>{selectedProfessional.name}</strong>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{selectedProfessional.role}</div>
              </div>
            </>
          ) : (
            <span style={{ color: 'var(--color-text-secondary)' }}>
              Cualquier profesional disponible
            </span>
          )}
        </div>
      </div>

      {/* Fecha & Hora */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-copper)', fontWeight: 700, marginBottom: '0.4rem' }}>
          <CalendarIcon size={14} /> Fecha y Horario
        </div>
        <div style={{ fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>
          {state.selectedDate ? (
            <div>
              <span style={{ textTransform: 'capitalize' }}>
                {formatDateDisplay(state.selectedDate)}
              </span>
              {state.selectedTime ? (
                <div style={{ color: 'var(--color-accent-gold)', fontWeight: 700, marginTop: '2px' }}>
                  Hora confirmada: {state.selectedTime} hrs
                </div>
              ) : (
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '2px' }}>
                  Pendiente selección de hora
                </div>
              )}
            </div>
          ) : (
            <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
              Fecha no seleccionada
            </span>
          )}
        </div>
      </div>

      {/* Totales y Duración */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1rem',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 'var(--radius-sm)',
          padding: '1rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Clock size={14} /> Duración total:
          </span>
          <strong style={{ color: 'var(--color-text-primary)' }}>
            {totalDuration > 0 ? formatDuration(totalDuration) : '0 min'}
          </strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', color: 'var(--color-text-highlight)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}>
            <DollarSign size={16} color="var(--color-accent-copper)" /> Total estimado:
          </span>
          <strong style={{ color: 'var(--color-accent-copper)', fontFamily: 'var(--font-display)', fontSize: '1.35rem' }}>
            {formatPriceClp(totalPrice)}
          </strong>
        </div>
      </div>

      {/* Disclaimer de demostración */}
      <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.72rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
        <AlertCircle size={14} color="var(--color-accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <span>{DEMO_CONFIG.pricesNotice}</span>
      </div>

      {state.selectedServices.length > 0 && (
        <button
          type="button"
          onClick={resetBooking}
          className="btn btn-ghost"
          style={{ fontSize: '0.75rem', padding: '0.4rem' }}
        >
          Reiniciar agendamiento
        </button>
      )}
    </aside>
  );
};
