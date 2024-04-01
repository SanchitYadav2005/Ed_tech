import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAllLinks = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/api/user/files/links", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res) {
          setData(res.data);
          setIsLoading(false);
        } else {
          console.log("No link found");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 

  

  }, []); 

  return { isLoading, data };
};
