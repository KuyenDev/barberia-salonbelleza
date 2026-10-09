import React, { useEffect } from 'react';
import { X, Calendar, Check, AlertCircle } from 'lucide-react';
import type { Professional } from '../../types';
import { SERVICES } from '../../data/services';
import { formatPriceClp } from '../../utils/format';
import { DEMO_CONFIG } from '../../config/demo';

interface TeamDetailModalProps {
  professional: Professional;
  onClose: () => void;
  onBook: () => void;
}

export const TeamDetailModal: React.FC<TeamDetailModalProps> = ({
  professional,
  onClose,
  onBook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const proServices = SERVICES.filter((s) =>
    s.compatibleProfessionalIds.includes(professional.id)
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${professional.name}`}
      className="lightbox-backdrop"
      onClick={onClose}
    >
      <div
        className="card-dark animate-scale-in"
        style={{
          maxWidth: '750px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          backgroundColor: '#161513',
          border: '1px solid var(--border-strong)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--color-text-secondary)',
            padding: '6px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color var(--transition-fast)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          <div>
            <img
              src={professional.image}
              alt={professional.name}
              style={{
                width: '100%',
                height: '320px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
              }}
            />
            <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
              <AlertCircle size={14} color="var(--color-accent-gold)" style={{ flexShrink: 0 }} />
              <span>{DEMO_CONFIG.disclaimerNote}</span>
            </div>
          </div>

          <div>
            <span className="badge badge-copper" style={{ marginBottom: '0.5rem' }}>
              {professional.role}
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.25rem' }}>
              {professional.name}
            </h2>
            <p style={{ color: 'var(--color-accent-gold)', fontSize: '0.9rem', marginBottom: '1.2rem', fontWeight: 600 }}>
              {professional.title}
            </p>

            <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                {professional.longBio}
              </p>
            </div>

            <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-highlight)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
              Servicios Asociados ({proServices.length})
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {proServices.map((service) => (
                <li
                  key={service.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.85rem',
                    padding: '0.4rem 0.6rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Check size={13} color="var(--color-accent-copper)" />
                    <span>{service.name}</span>
                  </span>
                  <strong style={{ color: 'var(--color-accent-copper)' }}>
                    {formatPriceClp(service.priceClp)}
                  </strong>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                onClose();
                onBook();
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={16} />
              <span>Agendar cita con {professional.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
