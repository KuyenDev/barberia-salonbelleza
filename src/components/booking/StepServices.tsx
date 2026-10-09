import React, { useState } from 'react';
import { Check, Clock, Plus, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/services';
import type { ServiceItem } from '../../types';
import { useBooking } from '../../hooks/useBooking';
import { formatPriceClp, formatDuration } from '../../utils/format';

interface StepServicesProps {
  onNext: () => void;
}

export const StepServices: React.FC<StepServicesProps> = ({ onNext }) => {
  const { state, toggleService } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');

  const categories = ['TODOS', 'BARBERÍA', 'PELUQUERÍA', 'COLORACIÓN', 'TRATAMIENTOS', 'ESTILISMO'];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'TODOS') return true;
    return service.category === selectedCategory;
  });

  const isSelected = (serviceId: string) => {
    return state.selectedServices.some((s) => s.id === serviceId);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span className="section-eyebrow">Paso 01 de 05</span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.5rem' }}>
          Selecciona tus Servicios
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Puedes combinar varios servicios en una misma cita (ej: Corte + Perfilado de barba o Balayage + Hidratación).
        </p>
      </div>

      {/* Filtros de categoría */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1rem',
        }}
      >
        {categories.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className="badge"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.78rem',
                cursor: 'pointer',
                backgroundColor: active ? 'var(--color-accent-copper)' : 'var(--color-bg-secondary)',
                color: active ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: active ? '1px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Lista de Servicios */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        {filteredServices.map((service: ServiceItem) => {
          const checked = isSelected(service.id);
          return (
            <div
              key={service.id}
              onClick={() => toggleService(service)}
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 1fr auto',
                gap: '1.25rem',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                backgroundColor: checked ? 'rgba(183, 122, 86, 0.08)' : 'var(--color-bg-secondary)',
                border: checked ? '1px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              className="service-selection-item"
            >
              <img
                src={service.image}
                alt={service.name}
                style={{
                  width: '100px',
                  height: '80px',
                  borderRadius: 'var(--radius-sm)',
                  objectFit: 'cover',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                  <span className="badge badge-dark" style={{ fontSize: '0.65rem' }}>
                    {service.category}
                  </span>
                  {service.popular && (
                    <span className="badge badge-copper" style={{ fontSize: '0.65rem' }}>
                      Popular
                    </span>
                  )}
                </div>

                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-highlight)', marginBottom: '0.35rem' }}>
                  {service.name}
                </h4>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.45rem', lineHeight: '1.4' }}>
                  {service.shortDescription}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '0.82rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--color-text-muted)' }}>
                    <Clock size={13} /> {formatDuration(service.durationMinutes)}
                  </span>
                  <span style={{ color: 'var(--color-accent-gold)', fontWeight: 700 }}>
                    {formatPriceClp(service.priceClp)}
                  </span>
                </div>
              </div>

              {/* Botón de selección */}
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: checked ? 'var(--color-accent-copper)' : 'rgba(255, 255, 255, 0.05)',
                  border: checked ? '1px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
                  color: checked ? '#FFFFFF' : 'var(--color-text-muted)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {checked ? <Check size={18} /> : <Plus size={18} />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Botón Siguiente */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button
          type="button"
          onClick={onNext}
          disabled={state.selectedServices.length === 0}
          className="btn btn-primary"
          style={{ minWidth: '180px' }}
        >
          <span>Continuar con Profesional</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
