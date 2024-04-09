import { useGetAllFiles } from "../hooks/getAllFiles";
import PostsNav from "../components/PostsNav";
import Loader from "../components/Loader";

const Notes = () => {
  const { data, isLoading } = useGetAllFiles();
  return (
    <>
      <PostsNav />
      {isLoading ? <Loader /> : (
        data?.files?.map((file) => (
          <object
            data={`data:application/pdf;base64,${file.base64}`}
            type="application/pdf"
            width="100%"
            height="600px"
            key={file.id} 
          >
            <embed
              src={`data:application/pdf;base64,${file.base64}`}
              type="application/pdf"
            />
          </object>
        ))
      )}
    </>
  );
};

export default Notes;
