import PostNav from "../components/PostsNav";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { useState,useEffect } from "react";
import { useGetAllLinks } from "../hooks/getAllLinks";
import "../styles/videos.scss";

const Videos = () => {
  const [videoData, setVideoData] = useState(null);
  const { isLoading, data } = useGetAllLinks();
  const videoId = data?.videoIds?.map(id=>id);
  useEffect(() => {
    console.log(videoId);
    const getVideoData = async () => {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&
      key=AIzaSyBad8gYJi8K3_2iR2QP1BQOFqXR-v2-tTM&part=snippet,contentDetails,statistics`)
      if(res){
        setVideoData(res.data)
        console.log(videoData)
      }
    }
    getVideoData();
  },[videoId, videoData]);
  return (
    <>
      <PostNav />
      {isLoading ? (
        <div className="mutating-dots">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#f34a23"
            secondaryColor="#f34a23"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <h1>{data?.links?.map((link) => link)}</h1>
      )}
    </>
  );
};

export default Videos;
