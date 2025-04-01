import { api } from "@/lib/api-client";
import { User } from "@/types/api";

export const getUserById = (id: string) => api.get<User>(`/users/${id}`);
export const updateUser = (id: string, data: Partial<User>) => api.put<User>(`/users/${id}`, data);
export const deleteUser = (id: string) => api.delete(`/users/${id}`);
export const getUserProfile = () => api.get<User>("/users/profile");
export const updateUserProfile = (data: Partial<User>) => api.put<User>("/users/profile", data);
