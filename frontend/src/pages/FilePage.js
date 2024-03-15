import React, { useState, useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import "../styles/filePage.scss";
import { useUpload } from "../hooks/useUpload";
import { useParams } from "react-router-dom";
import { GetFileById } from "../hooks/getFileById";

const FilePage = () => {
  let { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const [fileFromLocalStorage, setFile] = useState(null);
  const { upload, isLoading } = useUpload();
  const { getFile, data } = GetFileById();

  console.log(id);

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : ""); 
    setIsUploadDisabled(!isUploadDisabled);
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    const getFileData = async () => {
      try {
        const gotFileData = await localStorage.getItem("notes");
        if (gotFileData) {
          const fileData = JSON.parse(gotFileData);
          setFile(fileData);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    };

    getFileData();
  }, []);

  const handleSubmit = async () => {
    await upload(selectedFile);
    await getFile(fileFromLocalStorage?.uploadedFile._id);
  };

  return (
    <>
      <SecondNavbar />
      <main className="main-container">
        <form className="file-container" >
          <label className="file-label" htmlFor="file">
            Choose file
          </label>
          <input
            type="file"
            className="file"
            id="file"
            onChange={handleChange}
          />
        </form>

        <button
          className="upload-btn"
          onClick={handleSubmit}
          disabled={isUploadDisabled}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
        <p className="selected-file">
          Selected File: <span className="span">{selectedFileName}</span>
        </p>
        <div className="uploaded-files-container">
          <h3>{fileFromLocalStorage?.uploadedFile._id}</h3>
        </div>
      </main>
    </>
  );
};

export default FilePage;
