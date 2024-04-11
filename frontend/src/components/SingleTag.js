import "../styles/singleTag.scss";

const SingleTag = ({ tags }) => {
  if (tags) {
    return (
      <>
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <span className="error-tags">No tags</span>
      </>
    );
  }
};

export default SingleTag;
