import { api } from "@/lib/api-client";
import { Alert } from "@/types/api";

export const getAlerts = () => api.get<Alert[]>("/alerts");
export const getAlertById = (id: string) => api.get<Alert>(`/alerts/${id}`);
export const createAlert = (data: Partial<Alert>) => api.post<Alert>("/alerts", data);
export const updateAlert = (id: string, data: Partial<Alert>) => api.put<Alert>(`/alerts/${id}`, data);
export const deleteAlert = (id: string) => api.delete(`/alerts/${id}`);
