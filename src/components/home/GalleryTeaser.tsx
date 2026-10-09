import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/gallery';

export const GalleryTeaser: React.FC = () => {
  const previewItems = GALLERY_ITEMS.slice(0, 4);

  return (
    <section
      aria-label="Galería destacada"
      className="section-wrapper"
      style={{
        backgroundColor: '#161513',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="section-eyebrow">PORTAFOLIO VISUAL</span>
            <h2 className="section-title">
              Galería Editorial <span className="serif-italic copper-text">&amp; Estilos</span>
            </h2>
            <p className="section-desc">
              Explora ejemplos técnicos y cortes de autor que definen la dirección estética contemporánea de ATELIER 47.
            </p>
          </div>

          <Link to="/gallery" className="btn btn-outline">
            <ImageIcon size={16} />
            <span>Ver Galería &amp; Antes/Después</span>
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {previewItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              style={{
                position: 'relative',
                height: '380px',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                display: 'block',
                border: '1px solid var(--border-subtle)',
              }}
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
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />

              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17, 17, 16, 0.85) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                }}
              >
                <span className="badge badge-copper" style={{ fontSize: '0.65rem', alignSelf: 'flex-start', marginBottom: '0.4rem' }}>
                  {item.category}
                </span>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-highlight)' }}>
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
