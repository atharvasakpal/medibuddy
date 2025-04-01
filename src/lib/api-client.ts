import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a type for API error responses
export interface ApiErrorResponse {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// Create the API client
const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 10000, // 10 seconds
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or cookies depending on your auth strategy
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // Handle authentication errors
    if (error.response?.status === 401) {
      // Clear token and redirect to login if needed
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token');
        // Optionally redirect to login page
        // window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

// Helper methods with proper typing
export const api = {
  get: <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) => 
    apiClient.get<T, R>(url, config),
    
  post: <T, D = Record<string, unknown>, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig) => 
    apiClient.post<T, R>(url, data, config),
    
  put: <T, D = Record<string, unknown>, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig) => 
    apiClient.put<T, R>(url, data, config),
    
  delete: <T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) => 
    apiClient.delete<T, R>(url, config),
};

export default apiClient;