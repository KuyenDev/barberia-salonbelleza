import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Sparkles, Droplets, Palette } from 'lucide-react';

export const FeaturedServices: React.FC = () => {
  const pillars = [
    {
      id: 'barberia',
      title: 'Barbería de Autor',
      category: 'BARBERÍA',
      icon: Scissors,
      headline: 'Precisión Geométrica & Ritual a Navaja',
      description: 'Fade milimétrico, visagismo facial masculino, y toallas calientes aromáticas inspiradas en la escuela clásica europea.',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80',
      tag: 'Desde $14.000 CLP',
    },
    {
      id: 'peluqueria',
      title: 'Peluquería & Estilismo',
      category: 'PELUQUERÍA',
      icon: Sparkles,
      headline: 'Arquitectura Capilar & Movimiento',
      description: 'Cortes en seco y húmedo adaptados a la morfología ósea, peinados sculpt y secados europeos con volumen orgánico.',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
      tag: 'Desde $16.000 CLP',
    },
    {
      id: 'coloracion',
      title: 'Color & Balayage Couture',
      category: 'COLORACIÓN',
      icon: Palette,
      headline: 'Diseño Cromático Personalizado',
      description: 'Balayage a mano alzada, corrección de color y mechas babylights con protectores moleculares de enlaces de queratina.',
      image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=900&q=80',
      tag: 'Desde $28.000 CLP',
    },
    {
      id: 'tratamientos',
      title: 'Cuidado & Tratamientos',
      category: 'TRATAMIENTOS',
      icon: Droplets,
      headline: 'Regeneración & Detox Capilar',
      description: 'Infusiones botánicas concentradas, ácido hialurónico con calor infrarrojo y terapias dérmicas para revitalizar la raíz.',
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80',
      tag: 'Desde $26.000 CLP',
    },
  ];

  return (
    <section aria-label="Servicios destacados" className="section-wrapper">
      <div className="site-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="section-eyebrow">DISCIPLINAS DEL ESTUDIO</span>
            <h2 className="section-title">
              Experiencias &amp; Servicios <span className="serif-italic copper-text">Signature</span>
            </h2>
            <p className="section-desc">
              Cada disciplina está concebida bajo estándares editoriales para transformar tu rutina en una experiencia sensorial y técnica memorable.
            </p>
          </div>

          <Link to="/services" className="btn btn-outline">
            <span>Ver Catálogo Completo</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mosaico Alternado de 4 Pilares */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  overflow: 'hidden',
                  transition: 'all var(--transition-smooth)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={pillar.image}
                    alt={pillar.title}
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
                      alignItems: 'center',
                      gap: '0.4rem',
                      backgroundColor: 'rgba(17, 17, 16, 0.85)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '0.72rem',
                      color: 'var(--color-accent-copper)',
                      fontWeight: 700,
                    }}
                  >
                    <Icon size={13} />
                    <span>0{idx + 1} &bull; {pillar.category}</span>
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-highlight)', marginBottom: '0.4rem' }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.84rem', color: 'var(--color-accent-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {pillar.headline}
                  </p>

                  <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.5', marginBottom: '1.5rem' }}>
                    {pillar.description}
                  </p>

                  <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      {pillar.tag}
                    </span>

                    <Link
                      to="/services"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-accent-copper)',
                      }}
                    >
                      <span>Ver detalles</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
