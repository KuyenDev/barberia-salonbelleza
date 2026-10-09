import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Bloquear scroll al abrir menú en móviles
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Servicios', path: '/services' },
    { label: 'Equipo', path: '/team' },
    { label: 'Galería', path: '/gallery' },
    { label: 'Nosotros', path: '/about' },
    { label: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 800,
          width: '100%',
          transition: 'all var(--transition-smooth)',
          backgroundColor: isScrolled
            ? 'rgba(17, 17, 16, 0.92)'
            : 'rgba(17, 17, 16, 0.65)',
          backdropFilter: 'blur(16px)',
          borderBottom: isScrolled
            ? '1px solid rgba(244, 240, 233, 0.1)'
            : '1px solid rgba(244, 240, 233, 0.05)',
        }}
      >
        <div
          className="site-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: isScrolled ? '0.85rem' : '1.3rem',
            paddingBottom: isScrolled ? '0.85rem' : '1.3rem',
            transition: 'padding var(--transition-fast)',
          }}
        >
          {/* LOGOTIPO EDITORIAL */}
          <Link
            to="/"
            style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
            aria-label={`${SITE_CONFIG.brandName} - Inicio`}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.45rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  color: 'var(--color-text-highlight)',
                }}
              >
                ATELIER
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  color: 'var(--color-accent-copper)',
                }}
              >
                47
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: 'var(--color-text-secondary)',
                marginTop: '-2px',
              }}
            >
              {SITE_CONFIG.brandDescriptor}
            </span>
          </Link>

          {/* NAVEGACIÓN ESCRITORIO */}
          <nav
            role="navigation"
            aria-label="Navegación principal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.2rem',
            }}
            className="desktop-nav"
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.8rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: active ? 600 : 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: active
                          ? 'var(--color-accent-copper)'
                          : 'var(--color-text-primary)',
                        position: 'relative',
                        padding: '0.3rem 0',
                        transition: 'color var(--transition-fast)',
                      }}
                      onMouseEnter={(e) => {
                        if (!active) e.currentTarget.style.color = 'var(--color-text-highlight)';
                      }}
                      onMouseLeave={(e) => {
                        if (!active) e.currentTarget.style.color = 'var(--color-text-primary)';
                      }}
                    >
                      {item.label}
                      {active && (
                        <span
                          style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: 0,
                            right: 0,
                            height: '2px',
                            backgroundColor: 'var(--color-accent-copper)',
                            borderRadius: '1px',
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* BOTÓN CTA RESERVAR CITA */}
            <Link
              to="/booking"
              className="btn btn-primary"
              style={{
                padding: '0.7rem 1.35rem',
                fontSize: '0.8rem',
              }}
            >
              <Calendar size={15} />
              <span>Agendar cita</span>
            </Link>
          </nav>

          {/* BOTÓN TOGGLE MENÚ MÓVIL */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              color: 'var(--color-text-highlight)',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MENÚ MÓVIL PANTALLA COMPLETA */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 850,
            backgroundColor: 'var(--color-bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            padding: '6rem 2rem 2.5rem',
            overflowY: 'auto',
          }}
          className="animate-fade-in"
        >
          <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-accent-copper)', fontWeight: 700 }}>
              MENÚ PRINCIPAL
            </span>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.6rem', margin: 0, padding: 0 }}>
            {navLinks.map((item) => {
              const active = isActive(item.path);
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: active ? 'var(--color-accent-copper)' : 'var(--color-text-highlight)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span>{item.label}</span>
                    {active && <Sparkles size={18} color="var(--color-accent-copper)" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div style={{ marginTop: 'auto', paddingTop: '2.5rem' }}>
            <Link
              to="/booking"
              className="btn btn-primary"
              style={{ width: '100%', marginBottom: '1rem' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar size={16} />
              <span>Agendar cita simulada</span>
            </Link>

            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Demostración interactiva KuyénDev
            </p>
          </div>
        </div>
      )}

      {/* Media query para header responsive */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
