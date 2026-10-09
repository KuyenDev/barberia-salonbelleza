import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { DEMO_CONFIG } from '../config/demo';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    alias: '',
    email: '',
    subject: 'Asesoría de Estilo & Visagismo',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 50,
        colors: ['#B77A56', '#B89A72', '#F4F0E9'],
      });
    } catch {
      // Ignore if canvas blocked
    }
  };

  return (
    <div className="section-wrapper" style={{ paddingTop: '4rem' }}>
      <div className="site-container">
        {/* Cabecera Editorial */}
        <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
          <span className="section-eyebrow">CONTACTO &amp; ATENCIÓN</span>
          <h1
            style={{
              fontSize: 'var(--text-h1)',
              marginBottom: '1rem',
              lineHeight: '1.08',
            }}
          >
            Conversemos sobre tu <span className="serif-italic copper-text">Próximo Estilo</span>
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
            ¿Tienes dudas sobre qué servicio elegir o necesitas asesoría para un cambio de imagen completo? Completa el formulario de simulación o revisa nuestras vías de contacto ilustrativas.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Formulario de Simulación */}
          <div className="card-dark" style={{ padding: '2.5rem' }}>
            <div
              style={{
                padding: '0.85rem 1rem',
                backgroundColor: 'rgba(184, 154, 114, 0.08)',
                border: '1px solid rgba(184, 154, 114, 0.25)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                color: 'var(--color-accent-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '2rem',
              }}
            >
              <AlertTriangle size={16} style={{ flexShrink: 0 }} />
              <span>{DEMO_CONFIG.contactNotice}</span>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="animate-fade-in">
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(183, 122, 86, 0.15)',
                    color: 'var(--color-accent-copper)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-highlight)', marginBottom: '0.75rem' }}>
                  Simulación Completada con Éxito
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                  {DEMO_CONFIG.contactSuccessMessage} En un sitio web productivo desarrollado por KuyénDev, este mensaje se integraría a tu CRM, WhatsApp Business o sistema de correos preferido.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ alias: '', email: '', subject: 'Asesoría de Estilo & Visagismo', message: '' });
                  }}
                  className="btn btn-secondary"
                >
                  <RotateCcw size={15} />
                  <span>Enviar otro mensaje de prueba</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="contact-alias" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Nombre o Alias de prueba *
                  </label>
                  <input
                    id="contact-alias"
                    type="text"
                    required
                    placeholder="Ej: Daniel Martínez"
                    value={formData.alias}
                    onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Correo electrónico demostrativo *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="ejemplo@demo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Tipo de consulta
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="input-field"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="Asesoría de Estilo & Visagismo">Asesoría de Estilo &amp; Visagismo</option>
                    <option value="Consulta sobre Servicios de Barbería">Consulta sobre Barbería</option>
                    <option value="Consulta sobre Coloración & Balayage">Consulta sobre Coloración &amp; Balayage</option>
                    <option value="Tratamientos de Restauración">Tratamientos de Restauración</option>
                    <option value="Información General para Demostración">Información General para Demostración</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
                    Mensaje de consulta *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe tus inquietudes o la transformación que buscas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  <Send size={15} />
                  <span>Enviar mensaje simulado</span>
                </button>
              </form>
            )}
          </div>

          {/* Información de Ubicación & Contacto Ilustrativo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card-dark" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-highlight)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem' }}>
                Coordenadas del Estudio
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <MapPin size={20} color="var(--color-accent-copper)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text-highlight)' }}>Dirección Ilustrativa</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>{SITE_CONFIG.contact.address}</p>
                    <p style={{ color: 'var(--color-accent-gold)', fontSize: '0.82rem' }}>{SITE_CONFIG.contact.city}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Clock size={20} color="var(--color-accent-copper)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text-highlight)' }}>Horario de Atención</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>{SITE_CONFIG.contact.hoursWeekdays}</p>
                    <p style={{ color: 'var(--color-text-secondary)' }}>{SITE_CONFIG.contact.hoursSaturday}</p>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem' }}>{SITE_CONFIG.contact.hoursSunday}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Phone size={20} color="var(--color-accent-copper)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text-highlight)' }}>Teléfono / WhatsApp Demostrativo</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>{SITE_CONFIG.contact.phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Mail size={20} color="var(--color-accent-copper)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-text-highlight)' }}>Correo Electrónico Demostrativo</strong>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '2px' }}>{SITE_CONFIG.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulación visual de mapa / ubicación de boutique */}
            <div
              className="card-dark"
              style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#191816',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-copper)', fontWeight: 700, textTransform: 'uppercase' }}>
                  Entorno &amp; Estacionamiento
                </span>
                <span className="badge badge-dark">Vitacura Demo</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                El estudio ficticio se ubica en un sector de fácil acceso con estacionamiento subterráneo privado y convenio de cortesía de 2 horas para clientes con cita agendada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
