import axios from "axios";
import { useState, useEffect } from "react";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = () => {
      const res = localStorage.getItem("user");
      if (res) {
        const jsonRes = JSON.parse(res);
        setData(jsonRes);
      } else {
        console.log("can not get data from local storage!");
      }
    };
    getData();
  }, []);

  const upload = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    setIsLoading((prevState) => !prevState);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(
        `http://localhost:8080/api/user/developer/${data.developer._id}/file`,
        formData,
        config
      );
      console.log("File upload successful:", response.data);
      console.log(isLoading);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return { upload, isLoading };
};
