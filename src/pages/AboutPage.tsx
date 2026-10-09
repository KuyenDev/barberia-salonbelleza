import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, Compass, Shield, Droplets } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem' }}>
      <div className="site-container">
        {/* Cabecera Editorial */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <span className="section-eyebrow">EL ESTUDIO</span>
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              marginBottom: '1.25rem',
              lineHeight: '1.08',
            }}
          >
            Donde la Precisión Técnica se Une a la{' '}
            <span className="serif-italic copper-text">Expresión Personal</span>
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
            ATELIER 47 nació como un concepto de barbería y salón boutique concebido para quienes aprecian la estética cuidada, la dedicación en el detalle y un ambiente libre de ruidos innecesarios.
          </p>
        </div>

        {/* Sección 1: Concepto & Arquitectura */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '6rem',
          }}
        >
          <div>
            <span className="section-eyebrow">CONCEPTO ESPACIAL</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-text-highlight)', marginBottom: '1.2rem' }}>
              Arquitectura Minimalista &amp; Acústica Calibrada
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '1.2rem' }}>
              Nuestras instalaciones ficticias están inspiradas en el diseño nórdico y japonés contemporáneo: muros en tonos carbón mate, acentos en cobre envejecido, maderas cálidas y una acústica tratada para propiciar conversaciones distendidas o momentos de total desconexión.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              Cada estación cuenta con iluminación neutra a 4000K, diseñada específicamente para visualizar los subtonos reales del cabello y la definición exacta de la barba sin sombras artificiales.
            </p>
          </div>

          <div
            style={{
              position: 'relative',
              height: '440px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
              alt="Arquitectura interior del salón y barbería"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Sección 2: Los Tres Principios de Atelier 47 */}
        <div
          style={{
            backgroundColor: '#161513',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '4rem clamp(1.5rem, 5vw, 4rem)',
            marginBottom: '6rem',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>NUESTROS PILARES</span>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-text-highlight)' }}>
              Criterio Técnico <span className="serif-italic copper-text">&amp; Ética Profesional</span>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2.5rem',
            }}
          >
            <div className="card-dark" style={{ border: '1px solid var(--border-subtle)', padding: '2rem' }}>
              <Compass size={28} color="var(--color-accent-copper)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-highlight)', marginBottom: '0.6rem' }}>
                Visagismo Individual
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                No aplicamos moldes idénticos. Estudiamos las líneas de mandíbula, pómulos y la dirección del crecimiento capilar para crear un corte que funcione en tu día a día.
              </p>
            </div>

            <div className="card-dark" style={{ border: '1px solid var(--border-subtle)', padding: '2rem' }}>
              <Droplets size={28} color="var(--color-accent-gold)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-highlight)', marginBottom: '0.6rem' }}>
                Fórmulas Botánicas
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Priorizamos productos libres de sulfatos y parabenos agresivos. Cuidamos la integridad del cuero cabelludo y el brillo natural del folículo.
              </p>
            </div>

            <div className="card-dark" style={{ border: '1px solid var(--border-subtle)', padding: '2rem' }}>
              <Shield size={28} color="var(--color-accent-copper)" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-highlight)', marginBottom: '0.6rem' }}>
                Atención Sin Prisas
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                Agendamos bloques holgados entre cada cliente para asegurar esterilización rigurosa de herramientas y diálogo genuino sin interrupciones.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 3: Banner de Demostración KuyénDev y CTA */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
            padding: '3rem 2rem',
            backgroundColor: 'rgba(183, 122, 86, 0.06)',
            border: '1px solid rgba(183, 122, 86, 0.25)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <Sparkles size={28} color="var(--color-accent-copper)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-highlight)', marginBottom: '0.75rem' }}>
            Diseñado para Potenciar Negocios de Belleza
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '2rem' }}>
            Esta demostración ilustra cómo KuyénDev ayuda a barberías y salones de alta gama a digitalizar su presencia con una estética de nivel internacional y un flujo de reservas claro y seductor.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/booking" className="btn btn-primary">
              <Calendar size={16} />
              <span>Explorar Agenda Simulada</span>
            </Link>
            <Link to="/contact" className="btn btn-outline">
              <span>Formulario de Demostración</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
