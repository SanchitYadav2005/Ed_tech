import { useState } from "react";
import useAuthContext from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password, isDeveloper) => {
    setIsLoading(true);
    setError(null);

    try {
      const URL = isDeveloper
        ? "http://localhost:8080/api/user/developer/login"
        : "http://localhost:8080/api/user/learner/login";

      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const response = await axios.post(
        URL,
        {
          email: email,
          password: password,
        },
        { headers }
      );
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const userJson = response.data;

      localStorage.setItem("user", JSON.stringify(userJson));
      dispatch({ type: "LOGIN", payload: userJson });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred while logging in!");
        console.error(error);
      }
    }
  };

  return { login, error, isLoading };
};
