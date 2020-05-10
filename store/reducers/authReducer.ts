import { AuthState, Action, BaseState } from "../types";

export const initialState: BaseState<AuthState> = {
  processing: false,
  data: {
    profile: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
    },
    authenticated: false,
    token: "",
  },
};

export const handler = (
  state: BaseState<AuthState> = initialState,
  action: Action
): BaseState<AuthState> => {
  switch (action.type) {
    case "AUTH_REGISTER_START":
    case "AUTH_LOGIN_START":
    case "AUTH_OTP_VERIFY_START":
      return {
        ...state,
        processing: true,
      };
    case "AUTH_REGISTER_SUCCESS":
      return {
        ...state,
        processing: false,
        data: {
          ...state.data,
          profile: { ...action.profile },
          token: action.token,
        },
      };
    case "AUTH_LOGIN_SUCCESS":
      return {
        ...state,
        processing: false,
        data: {
          ...state.data,
          token: action.token,
        },
      };
    case "AUTH_OTP_VERIFY_SUCCESS":
      return {
        ...state,
        processing: false,
        data: {
          ...state.data,
          otp: action.otp,
        },
      };
    case "AUTH_SET_AUTHENTICATED":
      return {
        ...state,
        data: {
          ...state.data,
          authenticated: true,
        },
      };
    case "AUTH_REGISTER_ERROR":
    case "AUTH_LOGIN_ERROR":
    case "AUTH_OTP_VERIFY_ERROR":
      return {
        ...state,
        processing: false,
        error: action.message,
      };
    default:
      return state;
  }
};
