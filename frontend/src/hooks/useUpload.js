// import axios from "axios";
// import { useState, useEffect } from "react";

// export const useUpload = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const getData = () => {
//       const res = localStorage.getItem("user");
//       if (res) {
//         const jsonRes = JSON.parse(res);
//         setData(jsonRes);
//       } else {
//         console.log("can not get data from local storage!");
//       }
//     };
//     getData();
//   }, []);

//   const upload = async (selectedFile) => {
//     // const formData = new FormData();
//     // formData.append("file", selectedFile);

//     setIsLoading(!isLoading);

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     };
//     try {
//       const response = await axios.post(
//         `http://localhost:8080/api/user/developer/${data.developer._id}/file`,
//         selectedFile
//       );
//       console.log("File upload successful:", response.data);
//       localStorage.setItem("notes", JSON.stringify(response.data));
//       console.log(isLoading);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return { upload, isLoading };
// };

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
      setIsLoading(!isLoading)
      const res = await axios.post(
        `http://localhost:8080/api/user/developer/${userData.developer._id}/file`,
        { selectedFile }
      );
      if (res) {
        console.log(res.data);
      } else {
        console.log("not able to post the file ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return{isLoading, upload}
};
