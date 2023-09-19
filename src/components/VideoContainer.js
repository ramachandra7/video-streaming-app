import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideoData = async () => {
      const videosList = await fetch(YOUTUBE_VIDEO_API);
      const list = await videosList.json();
      setVideos(list.items);
    };
    fetchVideoData();
  }, []);
  return (
    <div className="flex flex-wrap p-4">
      {videos.map((video, index) => (
        <Link to={`/watch?v=${video.id}`} key={video.id} className="shadow-2xl">
        <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
