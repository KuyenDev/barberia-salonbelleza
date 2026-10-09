import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Check, Plus, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { useBooking } from '../../hooks/useBooking';
import { formatPriceClp, formatDuration } from '../../utils/format';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const { state, toggleService, setStep } = useBooking();
  const navigate = useNavigate();

  const isSelected = state.selectedServices.some((s) => s.id === service.id);

  const handleBookNow = () => {
    if (!isSelected) {
      toggleService(service);
    }
    setStep(2);
    navigate('/booking');
  };

  return (
    <article
      className="card-dark"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'hidden',
        border: isSelected
          ? '1px solid var(--color-accent-copper)'
          : '1px solid var(--border-subtle)',
        boxShadow: isSelected ? '0 0 20px var(--color-accent-copper-glow)' : 'none',
        transition: 'all var(--transition-smooth)',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '240px',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#1C1B19',
        }}
      >
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform var(--transition-editorial)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />

        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 2,
          }}
        >
          <span className="badge badge-dark" style={{ backgroundColor: 'rgba(17, 17, 16, 0.85)', backdropFilter: 'blur(8px)' }}>
            {service.category}
          </span>
          {service.popular && (
            <span className="badge badge-copper" style={{ backdropFilter: 'blur(8px)' }}>
              Destacado
            </span>
          )}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to top, rgba(28, 27, 25, 0.9), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-highlight)' }}>
            {service.name}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--color-text-secondary)' }}>
            <Clock size={14} color="var(--color-accent-copper)" /> {formatDuration(service.durationMinutes)}
          </span>
          <span style={{ color: 'var(--color-accent-gold)', fontWeight: 700, fontSize: '1.15rem', fontFamily: 'var(--font-display)' }}>
            {formatPriceClp(service.priceClp)}
          </span>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.2rem' }}>
          {service.shortDescription}
        </p>

        {expanded && (
          <div style={{ marginBottom: '1.2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }} className="animate-fade-in">
            <p style={{ fontSize: '0.84rem', color: 'var(--color-text-primary)', lineHeight: '1.5', marginBottom: '0.75rem' }}>
              {service.fullDescription}
            </p>
            <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-accent-copper)', fontWeight: 700, marginBottom: '0.4rem' }}>
              El ritual incluye:
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {service.includes.map((inc, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  <Check size={13} color="var(--color-accent-copper)" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            color: 'var(--color-text-muted)',
            fontSize: '0.78rem',
            background: 'none',
            border: 'none',
            padding: 0,
            marginBottom: '1.25rem',
            cursor: 'pointer',
          }}
        >
          <span>{expanded ? 'Menos detalles' : 'Ver qué incluye este servicio'}</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.6rem', marginTop: 'auto' }}>
          <button
            type="button"
            onClick={handleBookNow}
            className="btn btn-primary"
            style={{ fontSize: '0.8rem', padding: '0.7rem 1rem' }}
          >
            <Calendar size={14} />
            <span>Agendar Cita</span>
          </button>

          <button
            type="button"
            onClick={() => toggleService(service)}
            className={`btn ${isSelected ? 'btn-secondary' : 'btn-outline'}`}
            style={{
              padding: '0.7rem',
              color: isSelected ? 'var(--color-accent-copper)' : 'inherit',
              borderColor: isSelected ? 'var(--color-accent-copper)' : 'var(--border-subtle)',
            }}
            title={isSelected ? 'Quitar de la lista de agendamiento' : 'Añadir al carrito de agendamiento'}
            aria-label={isSelected ? 'Quitar servicio' : 'Añadir servicio'}
          >
            {isSelected ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
};
