import React, { useState, useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import "../styles/filePage.scss";
import { useUpload } from "../hooks/useUpload";

const FilePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const { upload, isLoading } = useUpload();

  const handleChange = (e) => {
    const file = e.target.files[0];

    setSelectedFile(file);
    setSelectedFileName(file ? file.name : "");
    setIsUploadDisabled(!isUploadDisabled);
  };

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  const handleSubmit = async () => {
    await upload(selectedFile);
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
          <h3>You don't have any uploaded files yet</h3>
        </div>
      </main>
    </>
  );
};

export default FilePage;
