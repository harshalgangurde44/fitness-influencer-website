import "./Videocard.css";

const VideoCard = (props) => {
  const { heading, video, tags } = props.video;

  return (
    <div className="video-card">
      <video src={video} autoPlay={false} controls />
      <div className="metadata">
        <h3>{heading}</h3>
        <p>Tags - {tags.join(", ")}</p>
      </div>
    </div>
  );
};

export default VideoCard;
