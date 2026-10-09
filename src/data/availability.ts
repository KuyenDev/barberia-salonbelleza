import type { TimeSlot } from '../types';

// Horarios base de atención demostrativa
export const STUDIO_BASE_SLOTS = [
  '09:30',
  '10:30',
  '11:30',
  '12:30',
  '14:00',
  '15:00',
  '16:15',
  '17:30',
  '18:45',
];

/**
 * Genera disponibilidad determinista para una fecha y profesional específicos.
 * Garantiza consistencia en re-renders sin aleatoriedad flotante.
 */
export function getAvailableSlotsForDate(
  dateStr: string, // YYYY-MM-DD
  professionalId: string,
  totalDurationMinutes: number
): TimeSlot[] {
  const dateObj = new Date(dateStr + 'T00:00:00');
  const dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Domingo cerrado
  if (dayOfWeek === 0) {
    return STUDIO_BASE_SLOTS.map((time) => ({
      time,
      available: false,
      reason: 'Estudio cerrado los domingos',
    }));
  }

  // Generador pseudo-hash determinista basado en caracteres de fecha y profesional
  const seedString = `${dateStr}_${professionalId}`;
  let hash = 0;
  for (let i = 0; i < seedString.length; i++) {
    hash = (hash << 5) - hash + seedString.charCodeAt(i);
    hash |= 0;
  }

  return STUDIO_BASE_SLOTS.map((time, index) => {
    // Si la duración es muy larga (> 100 minutos), los últimos slots de la tarde no alcanzan
    if (totalDurationMinutes > 100 && (time === '17:30' || time === '18:45')) {
      return {
        time,
        available: false,
        reason: 'Tiempo insuficiente para la duración del servicio',
      };
    }

    // Determinista: el slot se marca no disponible si el bitwise concuerda
    const slotHash = Math.abs(hash + index * 17);
    const isBooked = slotHash % 3 === 0;

    return {
      time,
      available: !isBooked,
      reason: isBooked ? 'Horario no disponible (demostración)' : undefined,
    };
  });
}

/**
 * Verifica si una fecha es seleccionable (no pasada y no domingo)
 */
export function isDateSelectable(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);

  if (checkDate < today) return false;
  if (checkDate.getDay() === 0) return false;

  return true;
}
