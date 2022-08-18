import React from "react";
import { Typography } from "@material-ui/core";
import Swiper from "./Swiper";

const SubsectionRow = ({ channel }) => {
  // TODO: research scroll loading
  const videos = channel.videos;
  const title = channel.title;
  const channelId = channel.channelId;
  console.log(title);
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>

      {videos && <Swiper channel={channel} videos={videos}></Swiper>}
    </React.Fragment>
  );
};

export default SubsectionRow;
