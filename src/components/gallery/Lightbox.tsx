import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { DEMO_CONFIG } from '../../config/demo';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="lightbox-backdrop"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar imagen"
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          color: '#FFFFFF',
          padding: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Fotografía anterior"
        style={{
          position: 'absolute',
          left: '1.5rem',
          color: '#FFFFFF',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <ChevronLeft size={28} />
      </button>

      <div
        style={{
          maxWidth: '900px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          style={{
            maxWidth: '100%',
            maxHeight: '65vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-sm)',
            boxShadow: 'var(--shadow-lg)',
          }}
        />

        <div
          style={{
            textAlign: 'center',
            color: 'var(--color-text-primary)',
            maxWidth: '600px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
            <span className="badge badge-copper">{currentItem.category}</span>
            <span className="badge badge-dark">{currentItem.serviceTag}</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-highlight)', marginBottom: '0.35rem' }}>
            {currentItem.title}
          </h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBottom: '0.6rem' }}>
            {currentItem.description}
          </p>
          <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
            <Info size={12} /> {DEMO_CONFIG.disclaimerNote} ({currentIndex + 1} de {items.length})
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Fotografía siguiente"
        style={{
          position: 'absolute',
          right: '1.5rem',
          color: '#FFFFFF',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};
