import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Professional } from '../../types';
import { useBooking } from '../../hooks/useBooking';
import { TeamDetailModal } from './TeamDetailModal';

interface TeamCardProps {
  professional: Professional;
}

export const TeamCard: React.FC<TeamCardProps> = ({ professional }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { setProfessional, setStep } = useBooking();
  const navigate = useNavigate();

  const handleBookWithPro = () => {
    setProfessional(professional.id);
    setStep(1);
    navigate('/booking');
  };

  return (
    <>
      <article
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
            height: '340px',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#1C1B19',
          }}
        >
          <img
            src={professional.image}
            alt={`Retrato ilustrativo de ${professional.name}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--transition-editorial)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />

          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              backgroundColor: 'rgba(17, 17, 16, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.72rem',
              color: 'var(--color-accent-gold)',
              fontWeight: 600,
              border: '1px solid var(--border-subtle)',
            }}
          >
            {professional.role}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              background: 'linear-gradient(to top, rgba(28, 27, 25, 0.95), transparent)',
            }}
          />
        </div>

        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <div style={{ marginBottom: '0.4rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-highlight)' }}>
              {professional.name}
            </h3>
            <p style={{ color: 'var(--color-accent-copper)', fontSize: '0.85rem', fontWeight: 600 }}>
              {professional.title}
            </p>
          </div>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
            {professional.specialtyDescription}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {professional.specialties.map((spec) => (
              <span key={spec} className="badge badge-dark" style={{ fontSize: '0.7rem' }}>
                {spec}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                {professional.instagramDemo}
              </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-accent-copper)',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 600,
                }}
              >
                <span>Ver biografía</span>
                <ArrowRight size={13} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleBookWithPro}
              className="btn btn-primary"
              style={{ width: '100%', fontSize: '0.85rem' }}
            >
              <Calendar size={15} />
              <span>Agendar con {professional.name.split(' ')[0]}</span>
            </button>
          </div>
        </div>
      </article>

      {modalOpen && (
        <TeamDetailModal
          professional={professional}
          onClose={() => setModalOpen(false)}
          onBook={handleBookWithPro}
        />
      )}
    </>
  );
};
