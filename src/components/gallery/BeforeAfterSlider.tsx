import React, { useState, useRef, useCallback } from 'react';
import { ChevronsLeftRight, Info } from 'lucide-react';
import type { BeforeAfterItem } from '../../types';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ item }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="card-dark" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <span className="badge badge-copper" style={{ marginBottom: '0.4rem' }}>
            {item.category}
          </span>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--color-text-highlight)' }}>
            {item.title}
          </h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-gold)', fontWeight: 600 }}>
            {item.serviceName}
          </span>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
            {item.durationText}
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
        {item.description}
      </p>

      {/* Contenedor Interactivo del Slider */}
      <div
        ref={containerRef}
        className="before-after-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={{
          height: '420px',
          cursor: 'ew-resize',
          position: 'relative',
        }}
      >
        {/* Imagen "DESPUÉS" (Base / fondo completo) */}
        <img
          src={item.afterImage}
          alt={`Resultado final: ${item.title}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(17, 17, 16, 0.8)',
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--color-accent-copper)',
            zIndex: 5,
          }}
        >
          DESPUÉS / ACABADO
        </div>

        {/* Imagen "ANTES" (Superpuesta y recortada con clip-path) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={item.beforeImage}
            alt={`Estado inicial: ${item.title}`}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              backgroundColor: 'rgba(17, 17, 16, 0.8)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--color-text-secondary)',
              zIndex: 5,
            }}
          >
            ANTES / ESTADO INICIAL
          </div>
        </div>

        {/* Barra divisora y Knob */}
        <div
          className="before-after-handle"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          <div className="before-after-knob">
            <ChevronsLeftRight size={18} />
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
        <Info size={13} color="var(--color-accent-gold)" />
        <span>Arrastra la barra central horizontalmente para comparar la técnica demostrativa.</span>
      </div>
    </div>
  );
};
