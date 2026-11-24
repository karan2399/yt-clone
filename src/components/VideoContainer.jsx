import { useEffect, useState } from "react";
import { YT_MOST_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link, useNavigate } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState();
  const navigate = useNavigate();
  const getVideos = async () => {
    const data = await fetch(YT_MOST_POPULAR_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {videos?.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
