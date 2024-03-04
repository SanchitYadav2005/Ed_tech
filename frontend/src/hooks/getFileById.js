import { useState } from "react";
import axios from "axios";

export const GetFileById = () => {
  const [data, setData] = useState(null);

  const getFile = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/${id}/file`
      );
      console.log(response.data);
      const jsonRes = JSON.parse(response.data);
      setData(jsonRes);
      console.log(data)
    } catch (e) {
      console.log(e);
    }
  };

  return { getFile, data };
};
