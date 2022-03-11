import React, { createContext, useContext, useReducer } from "react";
import { reducer, ActionI, TypeE, LoginI, LogoutI } from "./reducer";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

// user type
export interface UserI {
  exp: number;
  id: number;
  name: string;
}
// initial state type
export interface initialStateInteface {
  user: UserI | null;
}

const initialState: initialStateInteface = {
  user: null,
};

const token = Cookies.get("jwt") || "";
if (token !== "") {
  const decodeJwt: UserI = jwt_decode(token);
  initialState.user = decodeJwt;
}

const AppContext = createContext<{
  state: initialStateInteface;
  dispatch: React.Dispatch<ActionI>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobleContext = () => {
  return useContext(AppContext);
};

export const login = (userData: UserI): LoginI => ({
  type: TypeE.Login,
  payload: userData,
});
export const logout = (): LogoutI => ({ type: TypeE.Logout });
