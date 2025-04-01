export interface User {
  _id: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'patient' | 'caregiver' | 'healthcare_provider' | 'admin';
  dateOfBirth?: string;
  phoneNumber?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  emergencyContacts?: EmergencyContact[];
  preferences?: Preferences;
  assignedDispensers?: string[];
  specialization?: string;
  licenseNumber?: string;
  isActive: boolean;
  lastLogin?: string;
}

export interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
  email?: string;
  isPrimaryContact?: boolean;
}

export interface Preferences {
  notificationMethods: ('app' | 'sms' | 'email' | 'voice')[];
  reminderFrequency: 'once' | 'twice' | 'thrice';
  medicationTimePreference: string[];
}

export interface Alert {
  _id: string;
  alertType: 'missed_dose' | 'medication_error' | 'general_alert';
  severity: 'low' | 'medium' | 'high';
  patient: string;
  medication?: string;
  message: string;
  status: 'active' | 'resolved' | 'dismissed';
  createdAt: string;
  updatedAt: string;
}

export interface Schedule {
  _id: string;
  patient: string;
  medication: string;
  scheduleTimes: string[];
  daysOfWeek: number[];
  startDate: string;
  endDate?: string;
  dosage: {
    tablets: number;
    unit: string;
  };
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PatientMedication {
  _id: string;
  patient: string;
  medication: string;
  prescribedBy?: string;
  dosage: {
    amount: number;
    unit: 'tablet' | 'half-tablet';
    frequency: 'daily' | 'twice-daily' | 'three-times-daily' | 'four-times-daily' | 'weekly' | 'as-needed';
    timesPerDay: number;
    specificTimes: string[];
  };
  startDate: string;
  endDate?: string;
  isActive: boolean;
  takeWithFood: boolean;
  takeWithWater: boolean;
  canBeCrushed: boolean;
  specialInstructions?: string;
  inventoryTracking: InventoryTracking;
  dispenserCompartment?: number;
  adherenceRate?: number;
}

export interface InventoryTracking {
  currentQuantity: number;
  refillAt?: number;
  lastRefillDate?: string;
  tabletsPerRefill?: number;
  exactTabletCount: boolean;
}

export interface Medication {
  _id: string;
  name: string;
  description?: string;
  dosageForm: 'tablet';
  strength: string;
  strengthUnit: 'mg' | 'g' | 'mcg' | 'IU' | 'other';
  shape: 'round' | 'oval' | 'oblong' | 'rectangle' | 'square' | 'diamond' | 'triangle' | 'other';
  color: string;
  size?: {
    diameter?: number;
    thickness?: number;
  };
  scoreLines?: number;
  coated: boolean;
  instructions?: string;
  sideEffects?: string[];
  warnings?: string[];
  requiresRefill: boolean;
  prescriptionRequired: boolean;
  imageUrl?: string;
  manufacturer?: string;
  ndc?: string;
  barcode?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DispensingLog {
  _id: string;
  device: string;
  patient: string;
  medication: string;
  scheduledTime: string;
  dispensedTime?: string;
  status: 'scheduled' | 'dispensed' | 'missed';
  compartmentId: number;
  quantity: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DispenserDevice {
  _id: string;
  deviceId: string;
  name: string;
  ownedBy: string;
  status: {
    isOnline: boolean;
    batteryLevel?: number;
  };
  compartments: Compartment[];
  configuration: {
    dispensingMode: 'automatic' | 'manual';
  };
  createdAt: string;
  updatedAt: string;
}

export interface Compartment {
  compartmentId: number;
  medicationId?: string;
  currentQuantity: number;
  capacity: number;
}
