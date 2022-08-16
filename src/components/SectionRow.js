import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";
import { useSelector } from "react-redux";
import { getAllChannelVideos } from "../services/service";

const SubsectionRow = ({ channel, index, token }) => {
  // TODO: research scroll loading
  const videos = channel.videos;
  const title = channel.title;
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>

      {videos && <Swiper videos={videos}></Swiper>}
    </React.Fragment>
  );
};

export default SubsectionRow;
