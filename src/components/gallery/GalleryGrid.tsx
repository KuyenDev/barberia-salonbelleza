import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/gallery';
import type { GalleryCategory } from '../../types';
import { Lightbox } from './Lightbox';

export const GalleryGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    'Todos',
    'Cortes masculinos',
    'Cortes femeninos',
    'Coloración',
    'Barbería',
    'Estilismo',
    'Tratamientos',
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCategory === 'Todos') return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      {/* Píldoras de Filtro */}
      <div
        style={{
          display: 'flex',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          justifyContent: 'center',
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
                padding: '0.6rem 1.25rem',
                fontSize: '0.8rem',
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

      {/* Grid Editorial Asimétrico */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {filteredItems.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: '#1C1B19',
                height: item.aspect === 'tall' ? '460px' : item.aspect === 'square' ? '300px' : '380px',
                cursor: 'pointer',
                border: '1px solid var(--border-subtle)',
                transition: 'all var(--transition-smooth)',
              }}
              className="gallery-item-card"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-editorial)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              {/* Overlay en hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 17, 16, 0.9) 0%, rgba(17, 17, 16, 0.2) 60%, transparent 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="badge badge-copper" style={{ fontSize: '0.68rem' }}>
                    {item.category}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                    }}
                  >
                    <Maximize2 size={15} />
                  </div>
                </div>

                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-highlight)', marginBottom: '0.25rem' }}>
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: '1.4' }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : (prev + 1) % filteredItems.length
            )
          }
        />
      )}
    </div>
  );
};
