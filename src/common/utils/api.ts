import { AxiosResponse } from "axios";
import { axios as api } from "@/api";

type ApiResponse<T> = AxiosResponse<T>;

export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response: ApiResponse<T> = await api.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};

export const post = async <T, D>(
  endpoint: string,
  data: D
): Promise<ApiResponse<T>> => {
  try {
    const response: ApiResponse<T> = await api.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default api;
