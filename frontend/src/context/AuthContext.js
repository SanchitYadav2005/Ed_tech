import { useReducer, createContext, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: storedUser });
    }
    console.log(storedUser)
  }, []);

  useEffect(() => {
    console.log("AuthContext state:", state);
  }, [state]);

  const contextValue = {
    state,
    dispatch,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
