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
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const response = await axios.post(URL, body, headers);
      console.log(response);
      const newToken = response.data.token;
      localStorage.setItem("token", newToken);

      const jsonData = response.data;
      localStorage.setItem("user", JSON.stringify(jsonData));
      dispatch({ type: "LOGIN", payload: jsonData });
      console.log(newToken)

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