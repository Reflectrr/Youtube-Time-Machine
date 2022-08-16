import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";
import { useSelector } from "react-redux";
import { getChannelVideos } from "../services/service";

const SubsectionRow = ({ text, channelId, token }) => {
  // TODO: create async function fetchVideos
  // TODO: research scroll loading
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    const fetchVideos = async (channelId) => {
      const fetchedVideos = await getChannelVideos(channelId, token);
      setVideos(fetchedVideos);
    };
    fetchVideos(channelId);
  }, [channelId, text, token]);
  console.log(videos);
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>

      {videos && <Swiper videos={videos}></Swiper>}
    </React.Fragment>
  );
};

export default SubsectionRow;
