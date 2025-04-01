import { api } from "@/lib/api-client";
import { Schedule } from "@/types/api";

export const getSchedules = () => api.get<Schedule[]>("/schedules");
export const getScheduleById = (id: string) => api.get<Schedule>(`/schedules/${id}`);
export const createSchedule = (data: Partial<Schedule>) => api.post<Schedule>("/schedules", data);
export const updateSchedule = (id: string, data: Partial<Schedule>) => api.put<Schedule>(`/schedules/${id}`, data);
export const deleteSchedule = (id: string) => api.delete(`/schedules/${id}`);
