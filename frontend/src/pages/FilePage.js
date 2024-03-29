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
    if (fileFromLocalStorage) {
      await getFile(fileFromLocalStorage?.uploadedFile._id);
    }
  };

  return (
    <>
      <SecondNavbar />
      <main className="main-container">
        <form className="file-container">
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
          {fileFromLocalStorage && (
            <>
              <h3>{fileFromLocalStorage.uploadedFile.file.originalname}</h3>
              {/* Display PDF */}
              <object
                data={`data:application/pdf;base64,${fileFromLocalStorage.base64File}`}
                type="application/pdf"
                width="100%"
                height="600px"
              >
                <embed
                  src={`data:application/pdf;base64,${fileFromLocalStorage.base64File}`}
                  type="application/pdf"
                />
              </object>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default FilePage;
