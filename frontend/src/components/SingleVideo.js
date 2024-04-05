const SingleVideo = ({title, description, channelName, thumbnail, likeCount, viewsCount, link}) => {
    return ( 
        <>
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{channelName}</h3>
            <img src={thumbnail} alt="thumbnail"/>
            <h4>{likeCount}</h4>
            <h5>{viewsCount}</h5>
            <h1>{link}</h1>
        </>
     );
}
 
export default SingleVideo;