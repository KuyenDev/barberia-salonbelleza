import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, AlertTriangle, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useBooking } from '../../hooks/useBooking';
import { PROFESSIONALS } from '../../data/professionals';
import { formatPriceClp, formatDuration, formatDateDisplay } from '../../utils/format';
import { DEMO_CONFIG } from '../../config/demo';

interface StepConfirmProps {
  onPrev: () => void;
}

export const StepConfirm: React.FC<StepConfirmProps> = ({ onPrev }) => {
  const {
    state,
    totalPrice,
    totalDuration,
    setClientAlias,
    setClientContact,
    setClientNotes,
    confirmBooking,
    resetBooking,
  } = useBooking();

  const [hasCompleted, setHasCompleted] = useState<boolean>(state.isConfirmed);

  const selectedProfessional = PROFESSIONALS.find(
    (p) => p.id === state.selectedProfessionalId
  );

  const handleCompleteSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    confirmBooking();
    setHasCompleted(true);

    // Disparar confeti refinado (tonos cobres y dorados)
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#B77A56', '#B89A72', '#F4F0E9', '#FFFFFF'],
      });
    } catch {
      // Ignorar si el entorno bloquea canvas
    }
  };

  if (hasCompleted) {
    return (
      <div
        className="card-dark animate-fade-in"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '3rem 2rem',
          border: '1px solid var(--color-accent-copper)',
          boxShadow: 'var(--shadow-copper)',
        }}
      >
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
          <CheckCircle2 size={36} />
        </div>

        <span className="badge badge-demo" style={{ marginBottom: '1rem' }}>
          Simulación Finalizada
        </span>

        <h2 style={{ fontSize: '2rem', color: 'var(--color-text-highlight)', marginBottom: '1rem' }}>
          {DEMO_CONFIG.bookingSuccessTitle}
        </h2>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          {DEMO_CONFIG.bookingSuccessMessage}
        </p>

        {/* Notificación estricta de no reserva */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '2rem',
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent-gold)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>
            <ShieldCheck size={18} />
            <span>Demostración completada. No se ha realizado ninguna reserva real.</span>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
            No se han almacenado tus datos ni se ha enviado ninguna notificación a correos o teléfonos. Esta interfaz demuestra cómo funcionaría la experiencia en un sistema de producción para clientes de KuyénDev.
          </p>
        </div>

        {/* Resumen del agendamiento ficticio */}
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '2.5rem',
            textAlign: 'left',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            fontSize: '0.85rem',
          }}
        >
          <div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Alias / Cliente:</div>
            <strong style={{ color: 'var(--color-text-highlight)' }}>{state.clientAlias || 'Cliente de Demostración'}</strong>
          </div>
          <div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Fecha y Turno:</div>
            <strong style={{ color: 'var(--color-text-highlight)' }}>
              {state.selectedDate ? formatDateDisplay(state.selectedDate) : ''} — {state.selectedTime} hrs
            </strong>
          </div>
          <div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Profesional:</div>
            <strong style={{ color: 'var(--color-text-highlight)' }}>
              {selectedProfessional ? selectedProfessional.name : 'Cualquier profesional disponible'}
            </strong>
          </div>
          <div>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Total Ficticio:</div>
            <strong style={{ color: 'var(--color-accent-copper)' }}>{formatPriceClp(totalPrice)}</strong>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            resetBooking();
            setHasCompleted(false);
          }}
          className="btn btn-primary"
          style={{ minWidth: '220px' }}
        >
          <RotateCcw size={16} />
          <span>Reiniciar simulación</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCompleteSimulation} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span className="section-eyebrow">Paso 05 de 05</span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.5rem' }}>
          Confirmación de la Simulación
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Revisa el desglose de tu cita y completa la simulación interactiva.
        </p>
      </div>

      {/* Tarjeta de Resumen Detallado */}
      <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--color-text-highlight)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
          Desglose del Servicio
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {state.selectedServices.map((service) => (
            <div key={service.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
              <div>
                <strong style={{ color: 'var(--color-text-highlight)' }}>{service.name}</strong>
                <span style={{ color: 'var(--color-text-muted)', marginLeft: '0.5rem', fontSize: '0.8rem' }}>
                  ({formatDuration(service.durationMinutes)})
                </span>
              </div>
              <span style={{ color: 'var(--color-accent-gold)', fontWeight: 600 }}>
                {formatPriceClp(service.priceClp)}
              </span>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem' }}>
          <strong>Duración Total: {formatDuration(totalDuration)}</strong>
          <strong style={{ color: 'var(--color-accent-copper)' }}>Total: {formatPriceClp(totalPrice)}</strong>
        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
          <div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Profesional:</span>
            <div><strong>{selectedProfessional ? selectedProfessional.name : 'Cualquier profesional disponible'}</strong></div>
          </div>
          <div>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase' }}>Fecha &amp; Hora:</span>
            <div>
              <strong style={{ textTransform: 'capitalize' }}>
                {state.selectedDate ? formatDateDisplay(state.selectedDate) : ''} — {state.selectedTime} hrs
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Campos de contacto de demostración (no sensibles) */}
      <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={16} color="var(--color-accent-copper)" />
          <h3 style={{ fontSize: '1.05rem', color: 'var(--color-text-highlight)' }}>
            Datos para la Simulación (Opcionales y Ficticios)
          </h3>
        </div>

        <div
          style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(184, 154, 114, 0.08)',
            border: '1px solid rgba(184, 154, 114, 0.25)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.8rem',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <AlertTriangle size={16} color="var(--color-accent-gold)" style={{ flexShrink: 0 }} />
          <span>{DEMO_CONFIG.contactNotice}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          <div>
            <label htmlFor="clientAlias" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
              Nombre o Alias de demostración
            </label>
            <input
              id="clientAlias"
              type="text"
              placeholder="Ej: Alex Demo"
              value={state.clientAlias}
              onChange={(e) => setClientAlias(e.target.value)}
              className="input-field"
            />
          </div>

          <div>
            <label htmlFor="clientContact" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
              Email o Teléfono de prueba (opcional)
            </label>
            <input
              id="clientContact"
              type="text"
              placeholder="ejemplo@demo.com"
              value={state.clientContact}
              onChange={(e) => setClientContact(e.target.value)}
              className="input-field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="clientNotes" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
            Notas o preferencias de estilo (opcional)
          </label>
          <textarea
            id="clientNotes"
            rows={2}
            placeholder="Ej: Tengo cabello ondulado, busco asesoría para mantener longitud..."
            value={state.clientNotes}
            onChange={(e) => setClientNotes(e.target.value)}
            className="input-field"
            style={{ resize: 'vertical' }}
          />
        </div>
      </div>

      {/* Navegación y Botón Completar Simulación */}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button type="button" onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} />
          <span>Atrás</span>
        </button>

        <button type="submit" className="btn btn-primary" style={{ minWidth: '220px' }}>
          <Sparkles size={16} />
          <span>Completar simulación</span>
        </button>
      </div>
    </form>
  );
};
