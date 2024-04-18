import React, { useState, useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import "../styles/filePage.scss";
import { useUpload } from "../hooks/useUpload";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const FilePage = () => {
  let { id } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [link, setLink] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [isUploadDisabled, setIsUploadDisabled] = useState(true);
  const { upload, isLoading } = useUpload();

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
  const handleSubmit = async () => {
    await upload(selectedFile, link);
  };

  return (
    <>
    <Helmet>
      <title>Dzire - upload file & link</title>
    </Helmet>
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
      </main>
    </>
  );
};

export default FilePage;
