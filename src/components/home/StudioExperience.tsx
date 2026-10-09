import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, UserCheck, CalendarCheck } from 'lucide-react';

export const StudioExperience: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Visagismo',
      icon: Compass,
      desc: 'Analizamos la morfología ósea, tu rutina diaria y textura para co-diseñar un estilo armónico que te identifique.',
    },
    {
      step: '02',
      title: 'Selección de Tratamiento',
      icon: Sparkles,
      desc: 'Definimos el ritual óptimo: corte estructurado, perfilado a navaja, balayage couture o regeneración molecular profunda.',
    },
    {
      step: '03',
      title: 'Maestría del Profesional',
      icon: UserCheck,
      desc: 'Cada integrante de nuestro equipo domina técnicas específicas con instrumental de precisión y fórmulas botánicas.',
    },
    {
      step: '04',
      title: 'Experiencia & Desconexión',
      icon: CalendarCheck,
      desc: 'Ambiente acústicamente cuidado, aromas orgánicos de cedro y atención individual sin prisas comerciales.',
    },
  ];

  return (
    <section
      aria-label="Experiencia y proceso del estudio"
      className="section-wrapper"
      style={{
        backgroundColor: '#161513',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="site-container">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem' }}>
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>EL RITUAL ATELIER</span>
          <h2 className="section-title">
            Una Experiencia Diseñada <span className="serif-italic copper-text">Alrededor de Ti</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            No creemos en las citas apresuradas. Concebimos cada visita como una pausa enriquecedora donde la técnica experta se une al cuidado personal.
          </p>
        </div>

        {/* 4 Pasos del Proceso */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="card-dark"
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(183, 122, 86, 0.25)',
                    lineHeight: '1',
                    marginBottom: '1rem',
                  }}
                >
                  {item.step}
                </div>

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(183, 122, 86, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent-copper)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={20} />
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-highlight)', marginBottom: '0.6rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interior del estudio / Composición fotográfica */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              height: '380px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
              alt="Ambiente privado de diseño y estilismo"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ padding: '1rem' }}>
            <span className="section-eyebrow">ARQUITECTURA DE BIENESTAR</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '1.25rem' }}>
              Espacio Minimalista, Acústica Cálida &amp; Privacidad
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              Diseñamos nuestras estaciones de trabajo con distanciamiento cómodo para brindar privacidad a cada cliente. Utilizamos sillones ergonómicos de cuero genuino, iluminación neutra no distorsiva y aromas botánicos seleccionados para inducir serenidad.
            </p>
            <Link to="/about" className="btn btn-secondary">
              <span>Conoce Más del Estudio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
