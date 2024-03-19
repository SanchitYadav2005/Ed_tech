import axios from "axios";
import { useState, useEffect } from "react";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const jsonData = JSON.parse(data);
      setUserData(jsonData);
    } else {
      console.log("cannot get data from localstorage!");
    }
  }, []);

  const upload = async (selectedFile) => {
    try {
      setIsLoading(true); // Set loading state to true before the request

      const formData = new FormData();
      formData.append("file", selectedFile); // Use "file" or the appropriate field name expected by the server

      const res = await axios.post(
        `http://localhost:8080/api/user/developer/${userData.developer._id}/file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set proper Content-Type header
          },
        }
      );

      if (res) {
        console.log(res.data);
        localStorage.setItem("notes", JSON.stringify(res.data))
      } else {
        console.log("Not able to post the file");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  };
  return { isLoading, upload };
};
