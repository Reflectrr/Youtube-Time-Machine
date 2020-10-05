import React from "react";
import { Typograghy } from "@material-ui/core";
import { useSelector } from "react-redux";

const HomePageView = () => {
  const classes = useSelector((state) => state.classes);
  const video = useSelector((state) => state.videos);
  //TODO
  return (
    <div>
      <Typograghy>Chapel of the Week</Typograghy>
      <iframe
        title={video.title}
        width="560"
        height="315"
        src={video.link}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.iframe}
      />
    </div>
  );
};

export default HomePageView;
