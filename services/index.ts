import axios, { AxiosResponse } from "axios";

const API_URL: string = "https://www.flickr.com/services";

export type ApiSuccessResponse<T> = {
  type: "success";
  data: T;
};

export type ApiErrorResponse = {
  type: "error";
  error: Error | string;
};

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

export const client = axios.create({
  baseURL: API_URL,
});

export const normalizeResponse = async <T>(
  input: Promise<AxiosResponse<T>>
): Promise<ApiResponse<T>> => {
  try {
    const response = await input;
    return {
      type: "success",
      data: response.data,
    };
  } catch {
    return {
      type: "error",
      error: "Something went wrong",
    };
  }
};
