import SingleTag from "./SingleTag";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import "../styles/video.scss";

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
        <a href={link} className="video-link" target="_blank" rel="noreferrer">
          <img className="card-img" src={thumbnail} alt={title} />
        </a>
        <div className="card-heading">
          <h3 className="title">{title}</h3>
          <span className="channelName">{channelName}</span>
        </div>
        <div className="tags">
          <SingleTag tags={tags} />
        </div>
        <div className="counts">
          <div className="bothCount" id="views">
            <RemoveRedEyeIcon className="eye-icon" />
            <span className="number">{viewsCount}</span>
          </div>
          <div className="bothCount" id="likes">
            <ThumbUpIcon className="thumb-icon" />
            <span className="number">{likeCount}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
