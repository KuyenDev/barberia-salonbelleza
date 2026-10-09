import React from 'react';
import { ArrowLeft, ArrowRight, Clock, Check, AlertCircle, Info } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';
import { getAvailableSlotsForDate } from '../../data/availability';
import { formatDateDisplay, formatDuration } from '../../utils/format';

interface StepTimeProps {
  onNext: () => void;
  onPrev: () => void;
}

export const StepTime: React.FC<StepTimeProps> = ({ onNext, onPrev }) => {
  const { state, setTime, totalDuration } = useBooking();

  const slots = state.selectedDate
    ? getAvailableSlotsForDate(
        state.selectedDate,
        state.selectedProfessionalId,
        totalDuration
      )
    : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span className="section-eyebrow">Paso 04 de 05</span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.5rem' }}>
          Selecciona tu Horario de Atención
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Para el día{' '}
          <strong style={{ color: 'var(--color-text-highlight)', textTransform: 'capitalize' }}>
            {state.selectedDate ? formatDateDisplay(state.selectedDate) : ''}
          </strong>{' '}
          (Duración estimada: {formatDuration(totalDuration)}).
        </p>
      </div>

      <div
        className="card-dark"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-copper)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Turnos Disponibles
          </span>
          <span className="badge badge-dark">Zona Horaria: Chile (GMT-3)</span>
        </div>

        {/* Rejilla de Horarios */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '0.85rem',
            marginBottom: '1.5rem',
          }}
        >
          {slots.map((slot) => {
            const isSelected = state.selectedTime === slot.time;
            return (
              <button
                key={slot.time}
                type="button"
                disabled={!slot.available}
                onClick={() => setTime(slot.time)}
                className={`time-slot-btn ${isSelected ? 'selected' : ''}`}
                title={slot.reason || 'Horario disponible'}
              >
                <Clock size={14} />
                <span>{slot.time}</span>
                {isSelected && <Check size={14} />}
              </button>
            );
          })}
        </div>

        {/* Resumen de selección actual */}
        {state.selectedTime ? (
          <div
            style={{
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(183, 122, 86, 0.12)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(183, 122, 86, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-highlight)',
            }}
          >
            <Check size={16} color="var(--color-accent-copper)" />
            <span>
              Horario seleccionado:{' '}
              <strong style={{ color: 'var(--color-accent-gold)' }}>
                {state.selectedTime} hrs
              </strong>{' '}
              (Finalización estimada: {getEstimatedEndTime(state.selectedTime, totalDuration)} hrs)
            </span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            <AlertCircle size={14} />
            <span>Haz clic en un horario para seleccionarlo. Los horarios tachados ya están ocupados.</span>
          </div>
        )}

        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
          <Info size={13} />
          <span>Horarios de demostración calculados en base a la duración del servicio.</span>
        </div>
      </div>

      {/* Navegación */}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button type="button" onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!state.selectedTime}
          className="btn btn-primary"
          style={{ minWidth: '180px' }}
        >
          <span>Revisar &amp; Confirmar</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

function getEstimatedEndTime(startTime: string, durationMinutes: number): string {
  const [h, m] = startTime.split(':').map(Number);
  const totalMin = h * 60 + m + durationMinutes;
  const endH = Math.floor(totalMin / 60);
  const endM = totalMin % 60;
  return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
}
