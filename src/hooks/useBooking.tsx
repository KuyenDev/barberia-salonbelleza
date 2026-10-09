import React, { createContext, useContext, useState, type ReactNode } from 'react';
import type { BookingState, ServiceItem } from '../types';
import { PROFESSIONALS } from '../data/professionals';

interface BookingContextType {
  state: BookingState;
  setStep: (step: 1 | 2 | 3 | 4 | 5) => void;
  toggleService: (service: ServiceItem) => void;
  removeService: (serviceId: string) => void;
  setProfessional: (professionalId: string | 'any') => void;
  setDate: (dateStr: string) => void;
  setTime: (timeStr: string) => void;
  setClientAlias: (alias: string) => void;
  setClientContact: (contact: string) => void;
  setClientNotes: (notes: string) => void;
  confirmBooking: () => void;
  resetBooking: () => void;
  totalPrice: number;
  totalDuration: number;
  availableProfessionals: typeof PROFESSIONALS;
}

const initialState: BookingState = {
  step: 1,
  selectedServices: [],
  selectedProfessionalId: 'any',
  selectedDate: null,
  selectedTime: null,
  clientAlias: '',
  clientContact: '',
  clientNotes: '',
  isConfirmed: false,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<BookingState>(initialState);

  const setStep = (step: 1 | 2 | 3 | 4 | 5) => {
    setState((prev) => ({ ...prev, step }));
  };

  const toggleService = (service: ServiceItem) => {
    setState((prev) => {
      const exists = prev.selectedServices.some((s) => s.id === service.id);
      const updatedServices = exists
        ? prev.selectedServices.filter((s) => s.id !== service.id)
        : [...prev.selectedServices, service];

      let newProfId = prev.selectedProfessionalId;
      if (newProfId !== 'any' && updatedServices.length > 0) {
        const isStillCompatible = updatedServices.every((s) =>
          s.compatibleProfessionalIds.includes(newProfId)
        );
        if (!isStillCompatible) {
          newProfId = 'any';
        }
      }

      return {
        ...prev,
        selectedServices: updatedServices,
        selectedProfessionalId: newProfId,
      };
    });
  };

  const removeService = (serviceId: string) => {
    setState((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.filter((s) => s.id !== serviceId),
    }));
  };

  const setProfessional = (professionalId: string | 'any') => {
    setState((prev) => ({
      ...prev,
      selectedProfessionalId: professionalId,
      selectedTime: null,
    }));
  };

  const setDate = (dateStr: string) => {
    setState((prev) => ({
      ...prev,
      selectedDate: dateStr,
      selectedTime: null,
    }));
  };

  const setTime = (timeStr: string) => {
    setState((prev) => ({ ...prev, selectedTime: timeStr }));
  };

  const setClientAlias = (alias: string) => {
    setState((prev) => ({ ...prev, clientAlias: alias }));
  };

  const setClientContact = (contact: string) => {
    setState((prev) => ({ ...prev, clientContact: contact }));
  };

  const setClientNotes = (notes: string) => {
    setState((prev) => ({ ...prev, clientNotes: notes }));
  };

  const confirmBooking = () => {
    setState((prev) => ({ ...prev, isConfirmed: true }));
  };

  const resetBooking = () => {
    setState(initialState);
  };

  const totalPrice = state.selectedServices.reduce(
    (acc, item) => acc + item.priceClp,
    0
  );

  const totalDuration = state.selectedServices.reduce(
    (acc, item) => acc + item.durationMinutes,
    0
  );

  const availableProfessionals = PROFESSIONALS.filter((prof) => {
    if (state.selectedServices.length === 0) return true;
    return state.selectedServices.every((s) =>
      s.compatibleProfessionalIds.includes(prof.id)
    );
  });

  return (
    <BookingContext.Provider
      value={{
        state,
        setStep,
        toggleService,
        removeService,
        setProfessional,
        setDate,
        setTime,
        setClientAlias,
        setClientContact,
        setClientNotes,
        confirmBooking,
        resetBooking,
        totalPrice,
        totalDuration,
        availableProfessionals,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking debe ser utilizado dentro de BookingProvider');
  }
  return context;
};
