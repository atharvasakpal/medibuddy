import { api } from "@/lib/api-client";
import { Medication } from "@/types/api";

export const getMedications = () => api.get<Medication[]>("/medications");
export const getMedicationById = (id: string) => api.get<Medication>(`/medications/${id}`);
export const createMedication = (data: Partial<Medication>) => api.post<Medication>("/medications", data);
export const updateMedication = (id: string, data: Partial<Medication>) => api.put<Medication>(`/medications/${id}`, data);
export const deleteMedication = (id: string) => api.delete(`/medications/${id}`);
