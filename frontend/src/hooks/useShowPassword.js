import { useState } from "react";

export const useShowPassword = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  return { show, toggle };
};
