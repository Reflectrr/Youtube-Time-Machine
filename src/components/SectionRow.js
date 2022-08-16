import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";
import { useSelector } from "react-redux";
import { getAllChannelVideos } from "../services/service";

const SubsectionRow = ({ text, channelId, token }) => {
  // TODO: research scroll loading
  //useEffect(() => {
  //const fetchVideos = async (channelId) => {
  //const fetchedVideos = await getAllChannelVideos(channelId, token);
  //setVideos(fetchedVideos);
  //};
  //fetchVideos(channelId);
  //}, [channelId, text, token]);
  const videos = null;
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
