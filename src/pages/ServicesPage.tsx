import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { ServicesFilter } from '../components/services/ServicesFilter';
import { DEMO_CONFIG } from '../config/demo';
import { useBooking } from '../hooks/useBooking';
import { formatPriceClp } from '../utils/format';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('TODOS');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');
  const { state, totalPrice } = useBooking();

  const categories = [
    'TODOS',
    'BARBERÍA',
    'PELUQUERÍA',
    'COLORACIÓN',
    'TRATAMIENTOS',
    'ESTILISMO',
  ];

  const filteredAndSortedServices = useMemo(() => {
    let result = SERVICES.filter((service) => {
      const matchesCategory =
        activeCategory === 'TODOS' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      result = [...result].sort((a, b) => a.priceClp - b.priceClp);
    } else if (sortBy === 'price-desc') {
      result = [...result].sort((a, b) => b.priceClp - a.priceClp);
    } else if (sortBy === 'duration-asc') {
      result = [...result].sort((a, b) => a.durationMinutes - b.durationMinutes);
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem' }}>
      <div className="site-container">
        {/* Cabecera de Página */}
        <div style={{ marginBottom: '3rem', maxWidth: '780px' }}>
          <span className="section-eyebrow">CATÁLOGO EDITORIAL</span>
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              marginBottom: '1rem',
              lineHeight: '1.08',
            }}
          >
            Servicios &amp; Rituales de <span className="serif-italic copper-text">Cuidado</span>
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Explora nuestra carta de barbería, peluquería vanguardista, diseño cromático y tratamientos de restauración capilar.
          </p>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1rem',
              backgroundColor: 'rgba(184, 154, 114, 0.08)',
              border: '1px solid rgba(184, 154, 114, 0.25)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.8rem',
              color: 'var(--color-accent-gold)',
            }}
          >
            <AlertCircle size={15} style={{ flexShrink: 0 }} />
            <span>{DEMO_CONFIG.pricesNotice}</span>
          </div>
        </div>

        {/* Barra de Filtro, Búsqueda y Ordenamiento */}
        <ServicesFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Barra de estado rápido si el usuario ya ha pre-seleccionado servicios */}
        {state.selectedServices.length > 0 && (
          <div
            style={{
              backgroundColor: 'rgba(183, 122, 86, 0.12)',
              border: '1px solid var(--color-accent-copper)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.5rem',
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
            className="animate-fade-in"
          >
            <div>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent-copper)', fontWeight: 700 }}>
                {state.selectedServices.length} {state.selectedServices.length === 1 ? 'servicio seleccionado' : 'servicios seleccionados'}
              </span>
              <div style={{ fontSize: '1.15rem', color: 'var(--color-text-highlight)', fontWeight: 700 }}>
                Total acumulado: {formatPriceClp(totalPrice)}
              </div>
            </div>

            <Link to="/booking" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              <Calendar size={16} />
              <span>Continuar al Agendamiento</span>
            </Link>
          </div>
        )}

        {/* Grilla de Servicios */}
        {filteredAndSortedServices.length === 0 ? (
          <div
            className="card-dark"
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              No se encontraron servicios con el criterio seleccionado.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('TODOS');
                setSearchQuery('');
              }}
              className="btn btn-secondary"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredAndSortedServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
