import { useContext } from "react";
import { AppContext } from "../App";
import VideoCard from "./VideoCard";
import "./Videos.css";

const Videos = () => {
  const { videosData } = useContext(AppContext);
  return (
    <div className="container">
      {videosData?.map((video) => {
        return <VideoCard video={video} />;
      })}
    </div>
  );
};

export default Videos;
