import React, { useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";
import { useSelector } from "react-redux";
import { getChannelVideos } from "../services/service";

const SubsectionRow = ({ text, channelId, token }) => {
  // TODO: create async function fetchVideos
  // TODO: research scroll loading
  const videos = useRef(null);
  useEffect(() => {
    const fetchVideos = async (channelId) => {
      console.log(channelId, token, text);
      videos.current = await getChannelVideos(channelId, token);
      return videos;
    };
    fetchVideos(channelId);
  }, [channelId, text, token]);
  console.log(videos.current);
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>

      {/*videos && videos.length !== 0 && <Swiper videos={videos}></Swiper>*/}
    </React.Fragment>
  );
};

export default SubsectionRow;
