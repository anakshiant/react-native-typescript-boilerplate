import { client, normalizeResponse } from "../index";
import {
  LoginDTO,
  LoginResponse,
  RegisterDTO,
  RegisterResponse,
  OTPVerifyDTO,
  OTPVerifyResponse,
} from "./auth.dto";
import { objectToFormData } from "../../utils";

export const login = (dto: LoginDTO) => {
  return normalizeResponse(
    client.post<LoginResponse>("/login", objectToFormData(dto))
  );
};

export const register = (dto: RegisterDTO) => {
  return normalizeResponse(
    client.post<RegisterResponse>("/RegisterUser", objectToFormData(dto))
  );
};

export const verifyOtp = (dto: OTPVerifyDTO) => {
  return normalizeResponse(
    client.post<OTPVerifyResponse>("/OTPVerify", objectToFormData(dto))
  );
};
