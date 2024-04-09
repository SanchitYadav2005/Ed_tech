import React, { useState, useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import SinglePost from "../components/SinglePost";
import "../styles/filePage.scss";
import { useUpload } from "../hooks/useUpload";
import { useParams } from "react-router-dom";
import { GetFileById } from "../hooks/getFileById";

const FilePage = () => {
  let { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [link, setLink] = useState(null);
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
  const handleLinkChange = async (e) => {
    setLink(e.target.value);
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
    await upload(selectedFile, link);
    if (fileFromLocalStorage) {
      await getFile(fileFromLocalStorage?.uploadedFile._id);
    }
  };

  return (
    <>
      <SecondNavbar />
      <main className="main-container">
        <div className="file-container">
          <label className="file-label" htmlFor="file">
            Choose file
          </label>
          <input
            type="file"
            className="file"
            id="file"
            onChange={handleChange}
          />
          <span className="span">{selectedFileName}</span>
        </div>

        <input
          type="text"
          className="link-upload"
          id="link"
          onChange={handleLinkChange}
          placeholder="upload your link here"
        />

        <button
          className="upload-btn"
          onClick={handleSubmit}
          disabled={isUploadDisabled}
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>

        <div className="uploaded-files-container">
          {fileFromLocalStorage ? (
            <>
              <h3 className="filename">{fileFromLocalStorage.uploadedFile.file.originalname}</h3>
              {/* Display PDF */}
              <SinglePost
                base64={fileFromLocalStorage.base64File}
                id={fileFromLocalStorage.uploadedFile._id}
              />
            </>
          ) : (
            <h3>No files uploaded</h3>
          )}
        </div>
      </main>
    </>
  );
};

export default FilePage;
