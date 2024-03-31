import { useState, useEffect } from "react";
import axios from "axios";
import PostsNav from "../components/PostsNav";
import pdfFile from "../assets/file.pdf";

const Notes = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:8080/api/user/files");
  //     if (response) {
  //       setData(response.data);
  //     }
  //   };
  //   fetchData()
  // });

  return (
    <>
      {/* <SecondNavbar />
      {/* <object data={pdfFile} width="500" height="500" aria-label="pdf file"/> */}
    {/* {data.map(e=>(
<embed src={pdfFile} width="500px" height="500px" />
    ))} */} 
      <PostsNav/>
    </>
  );
};

export default Notes;
