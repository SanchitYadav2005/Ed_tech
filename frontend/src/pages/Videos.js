import PostNav from "../components/PostsNav";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";
import { useState,useEffect } from "react";
import { useGetAllLinks } from "../hooks/getAllLinks";
import "../styles/videos.scss";

const Videos = () => {
  const [videoData, setVideoData] = useState([]);
const { isLoading, data } = useGetAllLinks();
const videoIds = data?.videoIds;

useEffect(() => {
    const getVideoData = async () => {
        if (videoIds && videoIds.length > 0) {
            const promises = videoIds.map(async (id) => {
                const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBad8gYJi8K3_2iR2QP1BQOFqXR-v2-tTM&part=snippet,contentDetails,statistics`);
                return res.data;
            });
            const responseData = await Promise.all(promises);
            setVideoData(responseData);
        }
    }
    getVideoData();
}, [videoIds]);

console.log(videoData);

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
