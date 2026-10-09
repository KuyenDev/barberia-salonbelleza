import React from 'react';
import { BookingProgress } from './BookingProgress';
import { BookingSummaryCard } from './BookingSummaryCard';
import { StepServices } from './StepServices';
import { StepProfessional } from './StepProfessional';
import { StepDate } from './StepDate';
import { StepTime } from './StepTime';
import { StepConfirm } from './StepConfirm';
import { useBooking } from '../../hooks/useBooking';

export const BookingWizard: React.FC = () => {
  const { state, setStep } = useBooking();

  return (
    <div style={{ width: '100%' }}>
      {/* Indicador de Pasos Superior */}
      <BookingProgress
        currentStep={state.step}
        onSelectStep={(step) => setStep(step)}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
        }}
        className="booking-layout-grid"
      >
        {/* Contenido del Paso Activo */}
        <div style={{ width: '100%' }} className="animate-fade-in">
          {state.step === 1 && (
            <StepServices onNext={() => setStep(2)} />
          )}

          {state.step === 2 && (
            <StepProfessional
              onNext={() => setStep(3)}
              onPrev={() => setStep(1)}
            />
          )}

          {state.step === 3 && (
            <StepDate
              onNext={() => setStep(4)}
              onPrev={() => setStep(2)}
            />
          )}

          {state.step === 4 && (
            <StepTime
              onNext={() => setStep(5)}
              onPrev={() => setStep(3)}
            />
          )}

          {state.step === 5 && (
            <StepConfirm onPrev={() => setStep(4)} />
          )}
        </div>

        {/* Barra lateral con resumen persistente (solo pasos 1 al 4) */}
        {state.step < 5 && (
          <div className="booking-summary-col">
            <BookingSummaryCard />
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .booking-layout-grid {
            grid-template-columns: ${state.step < 5 ? '1fr 340px' : '1fr'} !important;
            align-items: start;
          }
        }
      `}</style>
    </div>
  );
};
