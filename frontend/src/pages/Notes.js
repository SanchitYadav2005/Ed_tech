import { useGetAllFiles } from "../hooks/getAllFiles";
import PostsNav from "../components/PostsNav";
import Loader from "../components/Loader";
import SinglePost from "../components/SinglePost";
import { Helmet } from "react-helmet";
const Notes = () => {
  const { data, isLoading } = useGetAllFiles();
  return (
    <>
    <Helmet>
      <title>Dezire | notes</title>
    </Helmet>
      <PostsNav />
      {isLoading ? (
        <Loader />
      ) : (
        data?.files?.map((file) => <SinglePost base64={file.base64} id={file.id} />)
      )}
    </>
  );
};

export default Notes;
