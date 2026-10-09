import React from 'react';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { BeforeAfterSlider } from '../components/gallery/BeforeAfterSlider';
import { BEFORE_AFTER_ITEMS } from '../data/gallery';
import { AlertCircle } from 'lucide-react';
import { DEMO_CONFIG } from '../config/demo';

export const GalleryPage: React.FC = () => {
  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem' }}>
      <div className="site-container">
        {/* Cabecera de Galería */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">PORTAFOLIO DE AUTOR</span>
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              marginBottom: '1rem',
              lineHeight: '1.08',
            }}
          >
            Galería &amp; Registro de <span className="serif-italic copper-text">Estilos</span>
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Una curaduría fotográfica de cortes contemporáneos, degradados limpios, coloración couture y técnicas de peinado editorial.
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
            <span>{DEMO_CONFIG.disclaimerNote}</span>
          </div>
        </div>

        {/* Sección Antes / Después Interactiva */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span className="section-eyebrow">TÉCNICA DEMOSTRATIVA</span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)' }}>
              Comparativa Técnica: <span className="serif-italic copper-text">Antes &amp; Después</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
              Desliza el divisor central para observar la definición de estructura, volumen y sellado en ejemplos de estilismo.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem',
            }}
          >
            {BEFORE_AFTER_ITEMS.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Mosaico Principal de la Galería */}
        <section>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>CATÁLOGO VISUAL COMPLETO</span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)' }}>
              Explora por Especialidad
            </h2>
          </div>

          <GalleryGrid />
        </section>
      </div>
    </div>
  );
};
