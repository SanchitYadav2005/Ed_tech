import PostNav from "../components/PostsNav";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useGetAllLinks } from "../hooks/getAllLinks";

const Videos = () => {
// const [allData, setAllData] = useState(null);
const{isLoading, data} = useGetAllLinks();

useEffect(()=>{
  console.log(data)
  console.log(isLoading)
})
  return (
    <>
    <PostNav/>

    </>
  );
};

export default Videos;
