import axios from "axios";
import { useState } from "react";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upload = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    
    setIsLoading(true);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/developer/file",
        formData,
        config
      );
      console.log("File upload successful:", response.data);
      console.log(isLoading)
    } catch (error) {
      console.error("Error uploading file:", error);
    } 
  };

  return { upload, isLoading };
};
