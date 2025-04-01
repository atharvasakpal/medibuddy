import { api } from "@/lib/api-client";
import { DispenserDevice, DispensingLog } from "@/types/api";

// Dispenser Device APIs
export const getDispenserDevices = () => api.get<DispenserDevice[]>("/dispensers");
export const getDispenserDeviceById = (id: string) => api.get<DispenserDevice>(`/dispensers/${id}`);
export const createDispenserDevice = (data: Partial<DispenserDevice>) => api.post<DispenserDevice>("/dispensers", data);
export const updateDispenserDevice = (id: string, data: Partial<DispenserDevice>) => api.put<DispenserDevice>(`/dispensers/${id}`, data);
export const deleteDispenserDevice = (id: string) => api.delete(`/dispensers/${id}`);

// Dispensing Log APIs
export const getDispensingLogs = () => api.get<DispensingLog[]>("/dispensers/logs");
export const getDispensingLogById = (id: string) => api.get<DispensingLog>(`/dispensers/logs/${id}`);
export const createDispensingLog = (dispenserId: string, data: Partial<DispensingLog>) => 
  api.post<DispensingLog>(`/dispensers/${dispenserId}/logs`, data);

export const updateDispensingLogStatus = (logId: string, data: Partial<DispensingLog>) =>
  api.put<DispensingLog>(`/dispensers/logs/${logId}`, data);

export const getUpcomingDispenses = (patientId: string) =>
  api.get<DispensingLog[]>(`/dispensers/upcoming/${patientId}`);
