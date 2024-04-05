import "../styles/singleTag.scss"; 

const SingleTag = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => ( 
        <div key={index} className="tag">{tag}</div> 
      ))}
    </>
  );
};

export default SingleTag;
