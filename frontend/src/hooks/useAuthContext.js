import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("AuthContext must be used inside an AuthContextProvider");
  }

  return context;
};

export default useAuthContext;
