import React from 'react';
import { Search, ArrowUpDown } from 'lucide-react';

interface ServicesFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const ServicesFilter: React.FC<ServicesFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        marginBottom: '2.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ position: 'relative', flex: '1', minWidth: '260px' }}>
          <Search
            size={18}
            color="var(--color-text-muted)"
            style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Buscar por servicio (ej: fade, balayage, afeitado, hidratación)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-field"
            style={{ paddingLeft: '2.8rem' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <ArrowUpDown size={16} color="var(--color-accent-copper)" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="input-field"
            style={{ padding: '0.85rem 1rem', width: 'auto', cursor: 'pointer' }}
          >
            <option value="default">Recomendados / Destacados</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="duration-asc">Duración: Más rápida</option>
            <option value="name">Alfabético (A - Z)</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
        }}
      >
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className="badge"
              style={{
                padding: '0.6rem 1.15rem',
                fontSize: '0.8rem',
                cursor: 'pointer',
                backgroundColor: active ? 'var(--color-accent-copper)' : 'var(--color-bg-secondary)',
                color: active ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: active ? '1px solid var(--color-accent-copper)' : '1px solid var(--border-subtle)',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
