import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROFESSIONALS } from '../../data/professionals';
import { TeamCard } from '../team/TeamCard';

export const FeaturedTeam: React.FC = () => {
  return (
    <section aria-label="Profesionales destacados" className="section-wrapper">
      <div className="site-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <div>
            <span className="section-eyebrow">EQUIPO RESIDENTE</span>
            <h2 className="section-title">
              Maestros del Oficio <span className="serif-italic copper-text">&amp; Estilismo</span>
            </h2>
            <p className="section-desc">
              Perfiles ficticios de demostración que ilustran cómo tus clientes pueden conocer a cada estilista o barbero y agendar directamente con su favorito.
            </p>
          </div>

          <Link to="/team" className="btn btn-outline">
            <span>Conoce a Todo el Equipo</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {PROFESSIONALS.map((prof) => (
            <TeamCard key={prof.id} professional={prof} />
          ))}
        </div>
      </div>
    </section>
  );
};
