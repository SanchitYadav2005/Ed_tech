import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAllFiles = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const getFiles = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/api/user/files", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res) {
          setData(res.data);
          setIsLoading(false);
        } else {
          console.log("No files found");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFiles();
  },[]);
  return { data, isLoading };
};
