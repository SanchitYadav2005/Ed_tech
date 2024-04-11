import "../styles/post.scss";

const SinglePost = ({ base64, id }) => {
  if (base64) {
    return (
      <>
        <object
          data={`data:application/pdf;base64,${base64}`}
          type="application/pdf"
          width="100%"
          height="600px"
          key={id}
          className="file-object"
        >
          <embed
            src={`data:application/pdf;base64,${base64}`}
            type="application/pdf"
            className="embed-file"
          />
        </object>
      </>
    );
  } else {
    return (
      <>
        <span className="error">No post available!</span>
      </>
    );
  }
};

export default SinglePost;
