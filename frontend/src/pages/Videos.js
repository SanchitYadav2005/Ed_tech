import PostNav from "../components/PostsNav";
import { MutatingDots } from "react-loader-spinner";
import { useEffect } from "react";
import { useGetAllLinks } from "../hooks/getAllLinks";
import "../styles/videos.scss";

const Videos = () => {
  // const [allData, setAllData] = useState(null);
  const { isLoading, data } = useGetAllLinks();

  useEffect(() => {
    console.log(data?.links?.map((link) => link));
    console.log(isLoading);
  });
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
