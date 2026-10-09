export type ServiceCategory = 
  | 'BARBERÍA' 
  | 'PELUQUERÍA' 
  | 'COLORACIÓN' 
  | 'TRATAMIENTOS' 
  | 'ESTILISMO';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  durationMinutes: number;
  priceClp: number;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  image: string;
  popular?: boolean;
  compatibleProfessionalIds: string[];
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  title: string;
  specialtyDescription: string;
  longBio: string;
  image: string;
  specialties: string[];
  servicesIds?: string[];
  daysAvailable: number[]; // 1 to 6 (Mon to Sat)
  instagramDemo: string;
}

export type GalleryCategory =
  | 'Todos'
  | 'Cortes masculinos'
  | 'Cortes femeninos'
  | 'Coloración'
  | 'Barbería'
  | 'Estilismo'
  | 'Tratamientos';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
  serviceTag: string;
  aspect: 'portrait' | 'square' | 'tall' | 'wide';
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  professionalName: string;
  serviceName: string;
  durationText: string;
}

export interface BookingState {
  step: 1 | 2 | 3 | 4 | 5;
  selectedServices: ServiceItem[];
  selectedProfessionalId: string | 'any';
  selectedDate: string | null; // Format: YYYY-MM-DD
  selectedTime: string | null; // Format: HH:MM
  clientAlias: string;
  clientContact: string;
  clientNotes: string;
  isConfirmed: boolean;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  reason?: string;
}
