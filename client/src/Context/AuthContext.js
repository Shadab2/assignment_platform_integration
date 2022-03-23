import React, { useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: null,
};

export const AuthContext = React.createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const { user, isFetching, error } = state;
  return (
    <AuthContext.Provider value={{ user, isFetching, error, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
