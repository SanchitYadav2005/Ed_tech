import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (body, isDeveloper) => {
    const URL = isDeveloper
      ? "http://localhost:8080/api/user/developer/signup"
      : "http://localhost:8080/api/user/learner/signup";
    setIsLoading(true);
    setError(null);
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }

      const response = await axios.post(URL, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const jsonData = response.data;
      localStorage.setItem("user", JSON.stringify(jsonData));
      dispatch({ type: "LOGIN", payload: jsonData });

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while signing up.");
      }
    }
  };

  return { signUp, isLoading, error };
};
