import React from 'react';
import { Scissors, User, Calendar as CalendarIcon, Clock, CheckCircle2 } from 'lucide-react';

interface BookingProgressProps {
  currentStep: 1 | 2 | 3 | 4 | 5;
  onSelectStep?: (step: 1 | 2 | 3 | 4 | 5) => void;
}

export const BookingProgress: React.FC<BookingProgressProps> = ({ currentStep, onSelectStep }) => {
  const steps = [
    { number: 1 as const, title: 'Servicios', icon: Scissors },
    { number: 2 as const, title: 'Profesional', icon: User },
    { number: 3 as const, title: 'Fecha', icon: CalendarIcon },
    { number: 4 as const, title: 'Horario', icon: Clock },
    { number: 5 as const, title: 'Confirmación', icon: CheckCircle2 },
  ];

  return (
    <nav
      aria-label="Progreso del agendamiento"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '820px',
        margin: '0 auto 2.5rem',
        padding: '0.5rem 1rem',
        position: 'relative',
      }}
    >
      {/* Línea de fondo conectora */}
      <div
        style={{
          position: 'absolute',
          top: '22px',
          left: '40px',
          right: '40px',
          height: '2px',
          backgroundColor: 'var(--border-subtle)',
          zIndex: 0,
        }}
      />

      {/* Línea de progreso activa */}
      <div
        style={{
          position: 'absolute',
          top: '22px',
          left: '40px',
          width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 20px)`,
          height: '2px',
          backgroundColor: 'var(--color-accent-copper)',
          transition: 'width var(--transition-smooth)',
          zIndex: 0,
        }}
      />

      {steps.map((s) => {
        const IconComponent = s.icon;
        const isCompleted = currentStep > s.number;
        const isCurrent = currentStep === s.number;
        const isAccessible = s.number <= currentStep;

        return (
          <button
            key={s.number}
            type="button"
            disabled={!isAccessible}
            onClick={() => onSelectStep && isAccessible && onSelectStep(s.number)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.45rem',
              position: 'relative',
              zIndex: 1,
              background: 'transparent',
              border: 'none',
              cursor: isAccessible ? 'pointer' : 'not-allowed',
              padding: 0,
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isCurrent
                  ? 'var(--color-accent-copper)'
                  : isCompleted
                  ? 'var(--color-bg-secondary)'
                  : 'var(--color-bg-primary)',
                border: isCurrent
                  ? '2px solid var(--color-accent-copper)'
                  : isCompleted
                  ? '2px solid var(--color-accent-copper)'
                  : '2px solid var(--border-subtle)',
                color: isCurrent
                  ? '#FFFFFF'
                  : isCompleted
                  ? 'var(--color-accent-copper)'
                  : 'var(--color-text-muted)',
                boxShadow: isCurrent ? '0 0 15px var(--color-accent-copper-glow)' : 'none',
                transition: 'all var(--transition-fast)',
              }}
            >
              <IconComponent size={18} />
            </div>

            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: isCurrent ? 700 : 500,
                color: isCurrent
                  ? 'var(--color-text-highlight)'
                  : isCompleted
                  ? 'var(--color-text-primary)'
                  : 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {s.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
