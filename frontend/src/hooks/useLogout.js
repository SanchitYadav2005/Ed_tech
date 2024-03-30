import useAuthContext from "./useAuthContext";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("notes");
    dispatch({ type: "LOGOUT" });
    console.log("user logged out successfully")
  };
  return { logout };
};
