import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";

const SubsectionRow = ({ channel }) => {
  // TODO: research scroll loading
  const videos = channel.videos;
  const title = channel.title;
  console.log(title);
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
