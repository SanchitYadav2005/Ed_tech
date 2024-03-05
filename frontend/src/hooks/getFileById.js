import { useState } from "react";
import axios from "axios";

export const GetFileById = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)

  const getFile = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setLoading(true)
      const response = await axios.get(
        `http://localhost:8080/api/user/${id}/file`,
        config
      );
      setData(response.data);
      console.log(data)
    } catch (e) {
      console.log(e);
    }finally{
      setLoading(true)
    }
  };

  return { getFile, data, loading };
};
