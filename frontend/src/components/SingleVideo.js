import SingleTag from './SingleTag';
import "../styles/video.scss"

const SingleVideo = ({
  title,
  tags,
  channelName,
  thumbnail,
  likeCount,
  viewsCount,
  link,
}) => {
  return (
    <>
      <div className="card">
        <a href={link} className="video-link">
          <img className="card-img" src={thumbnail} alt={title} />
        </a>
        <div className="card-heading">
          <h3>{title}</h3>
          <span>{channelName}</span>
        </div>
        <div className="tags">
          <SingleTag tags={tags}/>
        </div>
      </div>
      {/* <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{channelName}</h3>
            <img src={thumbnail} alt="thumbnail"/>
            <h4>{likeCount}</h4>
            <h5>{viewsCount}</h5>
            <h1>{link}</h1> */}
    </>
  );
};

export default SingleVideo;
