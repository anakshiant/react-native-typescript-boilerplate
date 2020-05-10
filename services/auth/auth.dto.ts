export type RegisterDTO = {
  MobileNumber: string;
  Firstname: string;
  LastName: string;
  Email: string;
  Password: string;
};

export type RegisterResponse = {
  token: string;
};

export type LoginDTO = {
  MobileNumber: string;
  Password: string;
};

export type LoginResponse = {
  token: string;
};

export type OTPVerifyDTO = {
  MobileNumber: string;
};

export type OTPVerifyResponse = {
  radomno: string;
};
