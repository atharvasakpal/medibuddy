import { api } from "@/lib/api-client";
import { PatientMedication } from "@/types/api";

export const getPatientMedications = () => api.get<PatientMedication[]>("/patient-medications");
export const getPatientMedicationById = (id: string) => api.get<PatientMedication>(`/patient-medications/${id}`);
export const createPatientMedication = (data: Partial<PatientMedication>) => api.post<PatientMedication>("/patient-medications", data);
export const updatePatientMedication = (id: string, data: Partial<PatientMedication>) => api.put<PatientMedication>(`/patient-medications/${id}`, data);
export const deletePatientMedication = (id: string) => api.delete(`/patient-medications/${id}`);
