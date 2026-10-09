import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Mail, Phone, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { DEMO_CONFIG } from '../../config/demo';
import { InstagramIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        backgroundColor: '#0D0D0C',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 'clamp(3.5rem, 6vw, 6rem)',
        paddingBottom: '2.5rem',
        color: 'var(--color-text-secondary)',
      }}
    >
      <div className="site-container">
        {/* Cabecera del Footer con Gran Logotipo Editorial */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: 'var(--color-text-highlight)',
                  }}
                >
                  ATELIER
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    color: 'var(--color-accent-copper)',
                  }}
                >
                  47
                </span>
              </div>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.22em', fontSize: '0.78rem', color: 'var(--color-accent-gold)', marginTop: '4px' }}>
                {SITE_CONFIG.brandDescriptor}
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '380px', color: 'var(--color-text-secondary)' }}>
                {SITE_CONFIG.slogan} Barbería, peluquería y estética editorial contemporánea.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <div className="badge badge-demo" style={{ padding: '0.45rem 1rem' }}>
                <ShieldCheck size={14} />
                <span>DEMOSTRACIÓN INTERACTIVA KUYÉNDEV</span>
              </div>
              <Link to="/booking" className="btn btn-primary" style={{ padding: '0.75rem 1.4rem' }}>
                <Calendar size={16} />
                <span>Agendar Cita Simulada</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Columnas de Información */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Columna 1: Horarios */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-text-highlight)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="var(--color-accent-copper)" /> Horarios del Estudio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>{SITE_CONFIG.contact.hoursWeekdays}</li>
              <li>{SITE_CONFIG.contact.hoursSaturday}</li>
              <li style={{ color: 'var(--color-text-muted)' }}>{SITE_CONFIG.contact.hoursSunday}</li>
            </ul>
          </div>

          {/* Columna 2: Ubicación & Contacto */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-text-highlight)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="var(--color-accent-copper)" /> Ubicación Ilustrativa
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <p>{SITE_CONFIG.contact.address}</p>
              <p style={{ color: 'var(--color-accent-gold)' }}>{SITE_CONFIG.contact.city}</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                <Phone size={14} color="var(--color-accent-copper)" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={14} color="var(--color-accent-copper)" />
                <span>{SITE_CONFIG.contact.email}</span>
              </p>
            </div>
          </div>

          {/* Columna 3: Enlaces Rápidos */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-text-highlight)', marginBottom: '1.25rem' }}>
              Explorar Estudio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><Link to="/services" style={{ transition: 'color var(--transition-fast)' }}>Catálogo de Servicios</Link></li>
              <li><Link to="/team" style={{ transition: 'color var(--transition-fast)' }}>Profesionales &amp; Especialistas</Link></li>
              <li><Link to="/gallery" style={{ transition: 'color var(--transition-fast)' }}>Galería &amp; Antes / Después</Link></li>
              <li><Link to="/about" style={{ transition: 'color var(--transition-fast)' }}>Filosofía &amp; Espacios</Link></li>
              <li><Link to="/contact" style={{ transition: 'color var(--transition-fast)' }}>Formulario de Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 4: KuyénDev Showcase Info */}
          <div>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-accent-copper)', marginBottom: '1.25rem' }}>
              Sobre este Proyecto
            </h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Diseñado como showcase de alta fidelidad para clientes de KuyénDev en los rubros de barbería, peluquería unisex y estética integral.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '8px', borderRadius: '50%', background: 'var(--color-bg-secondary)', border: '1px solid var(--border-subtle)', display: 'inline-flex', color: 'var(--color-text-primary)' }}
                aria-label="Instagram Demostrativo"
              >
                <InstagramIcon size={16} />
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>@atelier47.demo</span>
            </div>
          </div>
        </div>

        {/* Disclaimer y créditos finales */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.2rem',
            fontSize: '0.78rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div style={{ maxWidth: '650px', lineHeight: '1.5' }}>
            <strong style={{ color: 'var(--color-accent-gold)' }}>AVISO DE DEMOSTRACIÓN: </strong>
            {DEMO_CONFIG.bannerText} {DEMO_CONFIG.disclaimerNote}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span>Hecho con</span>
            <Heart size={13} color="var(--color-accent-copper)" fill="var(--color-accent-copper)" />
            <span>por</span>
            <strong style={{ color: 'var(--color-text-highlight)' }}>KuyénDev</strong>
            <span>&copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
