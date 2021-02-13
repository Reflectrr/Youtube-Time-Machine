import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Swiper from "./Swiper";
import { useSelector } from "react-redux";

const SubsectionRow = ({ text, type }) => {
  //TODO
  const classes = useSelector((state) => state.classes);
  const videosObject = useSelector((state) => state.videos);
  const videos = videosObject[type];

  console.log(type);
  console.log(videos);
  if (videos.length === 0) return null;
  console.log(videos);
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>

      <Swiper videos={videos}></Swiper>
    </React.Fragment>
  );
};

export default SubsectionRow;
