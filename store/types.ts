import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export type Profile = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
};

export type AuthState = {
  profile: Profile;
  otp?: number;
  token: string;
  authenticated: boolean;
};

export type BaseState<T> = {
  error?: string;
  processing: boolean;
  data: T;
};

export type State = {
  auth: BaseState<AuthState>;
};

export type Action =
  | {
      type: "AUTH_REGISTER_START";
    }
  | {
      type: "AUTH_REGISTER_SUCCESS";
      profile: Profile;
      token: string;
    }
  | {
      type: "AUTH_REGISTER_ERROR";
      message: string;
    }
  | {
      type: "AUTH_LOGIN_START";
    }
  | {
      type: "AUTH_LOGIN_SUCCESS";
      token: string;
    }
  | {
      type: "AUTH_LOGIN_ERROR";
      message: string;
    }
  | {
      type: "AUTH_OTP_VERIFY_START";
    }
  | {
      type: "AUTH_OTP_VERIFY_SUCCESS";
      otp: number;
    }
  | {
      type: "AUTH_OTP_VERIFY_ERROR";
      message: string;
    }
  | {
      type: "AUTH_SET_AUTHENTICATED";
    };

// https://app.gethyperdoc.com/t/ggX26ODro8oRVAOUnaZ3
export const useSelector: TypedUseSelectorHook<State> = useReduxSelector;

// https://app.gethyperdoc.com/t/kcpLtsvaAu8Pm3I83B3o
export type Dispatch = ThunkDispatch<State, any, Action>;
export function useDispatch(): Dispatch {
  return useReduxDispatch();
}
