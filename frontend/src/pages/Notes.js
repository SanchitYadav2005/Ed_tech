import SecondNavbar from "../components/SecondNavbar";
import { Worker, Viewer } from '@react-pdf-viewer/core';


const Notes = () => {
  return (
    <>
      <SecondNavbar />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

      </Worker>
    </>
  );
};

export default Notes;
