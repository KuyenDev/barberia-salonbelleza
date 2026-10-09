import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info } from 'lucide-react';
import { useBooking } from '../../hooks/useBooking';
import { isDateSelectable } from '../../data/availability';
import { formatDateDisplay } from '../../utils/format';

interface StepDateProps {
  onNext: () => void;
  onPrev: () => void;
}

export const StepDate: React.FC<StepDateProps> = ({ onNext, onPrev }) => {
  const { state, setDate } = useBooking();

  // Inicializar en el mes actual o en el mes de la fecha ya seleccionada
  const initialDate = state.selectedDate ? new Date(state.selectedDate + 'T00:00:00') : new Date();
  const [currentYear, setCurrentYear] = useState<number>(initialDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState<number>(initialDate.getMonth()); // 0-indexed

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
  ];

  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Días en el mes actual
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Primer día de la semana del mes (ajustado para que Lunes sea 0 y Domingo 6)
  const firstDayIndex = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  // Generar celdas de calendario
  const calendarCells = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarCells.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarCells.push(d);
  }

  const formatIsoDate = (year: number, month: number, day: number) => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <span className="section-eyebrow">Paso 03 de 05</span>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-highlight)', marginBottom: '0.5rem' }}>
          Selecciona la Fecha de tu Cita
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
          Atención disponible de Lunes a Sábado. Domingos cerrado por mantenimiento y descanso técnico.
        </p>
      </div>

      <div
        className="card-dark"
        style={{
          maxWidth: '520px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Cabecera del Mes */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <button
            type="button"
            onClick={handlePrevMonth}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.75rem' }}
            aria-label="Mes anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-highlight)', textTransform: 'capitalize' }}>
            {monthNames[currentMonth]} {currentYear}
          </h3>

          <button
            type="button"
            onClick={handleNextMonth}
            className="btn btn-secondary"
            style={{ padding: '0.5rem 0.75rem' }}
            aria-label="Mes siguiente"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Días de la semana */}
        <div className="calendar-grid" style={{ marginBottom: '0.5rem' }}>
          {daysOfWeek.map((day) => (
            <div key={day} className="calendar-day-header">
              {day}
            </div>
          ))}
        </div>

        {/* Días del mes */}
        <div className="calendar-grid">
          {calendarCells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} style={{ opacity: 0 }} />;
            }

            const cellDate = new Date(currentYear, currentMonth, day);
            const dateStr = formatIsoDate(currentYear, currentMonth, day);
            const isSelectable = isDateSelectable(cellDate);
            const isSelected = state.selectedDate === dateStr;

            return (
              <button
                key={dateStr}
                type="button"
                disabled={!isSelectable}
                onClick={() => setDate(dateStr)}
                className={`calendar-day-btn ${isSelected ? 'selected' : ''}`}
                aria-label={`Seleccionar ${day} de ${monthNames[currentMonth]} de ${currentYear}`}
              >
                <span>{day}</span>
              </button>
            );
          })}
        </div>

        {/* Indicador de fecha elegida */}
        {state.selectedDate && (
          <div
            style={{
              marginTop: '1.5rem',
              padding: '0.85rem 1rem',
              backgroundColor: 'rgba(183, 122, 86, 0.12)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid rgba(183, 122, 86, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.85rem',
              color: 'var(--color-text-highlight)',
            }}
          >
            <CalendarIcon size={16} color="var(--color-accent-copper)" />
            <span>
              Fecha seleccionada:{' '}
              <strong style={{ textTransform: 'capitalize' }}>
                {formatDateDisplay(state.selectedDate)}
              </strong>
            </span>
          </div>
        )}

        <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
          <Info size={13} />
          <span>Disponibilidad generada localmente de acuerdo al calendario ficticio de demostración.</span>
        </div>
      </div>

      {/* Navegación */}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button type="button" onClick={onPrev} className="btn btn-secondary">
          <ArrowLeft size={16} />
          <span>Atrás</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!state.selectedDate}
          className="btn btn-primary"
          style={{ minWidth: '180px' }}
        >
          <span>Continuar con Horario</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
