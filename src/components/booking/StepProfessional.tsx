import React from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles, ShieldAlert } from 'lucide-react';
import { PROFESSIONALS } from '../../data/professionals';
import { useBooking } from '../../hooks/useBooking';

interface StepProfessionalProps {
  onNext: () => void;
  onPrev: () => void;
}

export const StepProfessional: React.FC<StepProfessionalProps> = ({ onNext, onPrev }) => {
  const { state, setProfessional, availableProfessionals } = useBooking();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span className="section-eyebrow">Paso 02 de 05</span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.5rem' }}>
          Selecciona a tu Profesional
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Elige al especialista de tu preferencia o selecciona la opción flexible para agendar según disponibilidad global.
        </p>
      </div>

      {/* Opción 1: Cualquier profesional disponible */}
      <div
        onClick={() => setProfessional('any')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: state.selectedProfessionalId === 'any' ? 'rgba(183, 122, 86, 0.1)' : 'var(--color-bg-secondary)',
          border: state.selectedProfessionalId === 'any' ? '1px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
          cursor: 'pointer',
          transition: 'all var(--transition-fast)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              backgroundColor: 'rgba(183, 122, 86, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-accent-copper)',
            }}
          >
            <Sparkles size={22} />
          </div>
          <div>
            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-highlight)' }}>
              Cualquier profesional disponible
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              Te asignaremos al especialista óptimo disponible para tus servicios seleccionados.
            </p>
          </div>
        </div>

        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            border: state.selectedProfessionalId === 'any' ? '2px solid var(--color-accent-copper)' : '2px solid var(--border-subtle)',
            backgroundColor: state.selectedProfessionalId === 'any' ? 'var(--color-accent-copper)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
          }}
        >
          {state.selectedProfessionalId === 'any' && <Check size={14} />}
        </div>
      </div>

      {/* Lista de Profesionales Individuales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {PROFESSIONALS.map((prof) => {
          const isCompatible = availableProfessionals.some((p) => p.id === prof.id);
          const isSelected = state.selectedProfessionalId === prof.id;

          return (
            <div
              key={prof.id}
              onClick={() => {
                if (isCompatible) setProfessional(prof.id);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isSelected ? 'rgba(183, 122, 86, 0.08)' : 'var(--color-bg-secondary)',
                border: isSelected
                  ? '1px solid var(--color-accent-copper)'
                  : isCompatible
                  ? '1px solid var(--border-subtle)'
                  : '1px solid rgba(255, 255, 255, 0.04)',
                opacity: isCompatible ? 1 : 0.5,
                cursor: isCompatible ? 'pointer' : 'not-allowed',
                transition: 'all var(--transition-fast)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <img
                  src={prof.image}
                  alt={prof.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: isSelected ? '2px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
                  }}
                />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-highlight)' }}>{prof.name}</h4>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-accent-copper)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>
                    {prof.role}
                  </p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                    {prof.instagramDemo}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.4' }}>
                {prof.specialtyDescription}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem' }}>
                {prof.specialties.map((spec) => (
                  <span key={spec} className="badge badge-dark" style={{ fontSize: '0.65rem' }}>
                    {spec}
                  </span>
                ))}
              </div>

              {!isCompatible ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#E58E8E', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.6rem' }}>
                  <ShieldAlert size={13} />
                  <span>No realiza todos los servicios seleccionados</span>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.6rem' }}>
                  <span style={{ fontSize: '0.78rem', color: isSelected ? 'var(--color-accent-copper)' : 'var(--color-text-muted)', fontWeight: 600 }}>
                    {isSelected ? 'Seleccionado' : 'Elegir profesional'}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Botones de Navegación */}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button type="button" onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} />
          <span>Atrás</span>
        </button>

        <button type="button" onClick={onNext} className="btn btn-primary" style={{ minWidth: '180px' }}>
          <span>Continuar con Fecha</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
