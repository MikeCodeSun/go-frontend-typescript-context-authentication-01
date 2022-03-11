import { UserI, initialStateInteface } from "./context";

export enum TypeE {
  Login = "LOGIN",
  Logout = "LOGOUT",
}

export interface LoginI {
  type: TypeE.Login;
  payload: UserI | null;
}

export interface LogoutI {
  type: TypeE.Logout;
}

export type ActionI = LoginI | LogoutI;

export const reducer = (
  state: initialStateInteface,
  action: ActionI
): initialStateInteface => {
  if (action.type === "LOGIN") {
    return { ...state, user: action.payload };
  }
  if (action.type === "LOGOUT") {
    return { ...state, user: null };
  }

  return state;
};
