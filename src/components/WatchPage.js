import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";
import { getVideoInfoByID } from "../utils/constants";
import CommentsList from "./CommentsList";
import { commentsdata } from "../utils/mock";
import LiveChat from "./LiveChat"; 
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  useEffect(() => {
    const fetchVideoByID = async (videoid) => {
      const info = await getVideoInfoByID(videoid);
      const json1 = await info.json();
      setVideoData(json1);
    };
    fetchVideoByID(searchParams.get("v"));
  }, []);

  const dispatch = useDispatch();
  return (
    <div className="mx-5 my-3">
    <div className="flex">
      <iframe
        width="75%"
        height="600"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="w-1/4">
        <LiveChat/>
      </div>
      </div>
      <p className="font-bold mt-2">Comments:</p>
      <CommentsList data={commentsdata} />
    </div>
  );
};

export default WatchPage;
