import React from 'react';
import { PROFESSIONALS } from '../data/professionals';
import { TeamCard } from '../components/team/TeamCard';
import { AlertCircle } from 'lucide-react';
import { DEMO_CONFIG } from '../config/demo';

export const TeamPage: React.FC = () => {
  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem' }}>
      <div className="site-container">
        {/* Cabecera Editorial */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">ARTISTAS &amp; MAESTROS</span>
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              marginBottom: '1rem',
              lineHeight: '1.08',
            }}
          >
            Profesionales Residentes de <span className="serif-italic copper-text">Atelier 47</span>
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Cada miembro de nuestro equipo ficticio encarna una disciplina específica: desde la simetría milimétrica del corte a navaja hasta la sutileza cromática del balayage couture.
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

        {/* Grilla de Perfiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {PROFESSIONALS.map((prof) => (
            <TeamCard key={prof.id} professional={prof} />
          ))}
        </div>

        {/* Filosofía de Colectivo */}
        <div
          className="card-dark"
          style={{
            padding: '3rem 2.5rem',
            backgroundColor: '#161513',
            border: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="section-eyebrow">FILOSOFÍA DEL COLECTIVO</span>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--color-text-highlight)', marginBottom: '1rem' }}>
              Sin jerarquías rígidas: Maestría especializada e individual
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
              En ATELIER 47 fomentamos la formación constante en técnicas europeas, japonesas y urbanas. Cada profesional dispone de libertad creativa y tiempo suficiente por cliente para asegurar una entrega técnica sin atajos.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <strong style={{ color: 'var(--color-accent-copper)', display: 'block', marginBottom: '4px' }}>
                Formación Continua
              </strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                Actualización semestral en visagismo y formulaciones botánicas no invasivas.
              </span>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <strong style={{ color: 'var(--color-accent-gold)', display: 'block', marginBottom: '4px' }}>
                Instrumental de Alta Gama
              </strong>
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                Tijeras japonesas forjadas a mano, navajas de precisión y secadores iónicos sin calor dañino.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
