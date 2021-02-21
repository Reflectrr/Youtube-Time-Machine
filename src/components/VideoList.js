import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "../style";

const VideoList = ({ category }) => {
  const videos = useSelector((state) => state.videos[category]);
  const classes = useStyles();

  return (
    <ul>
      {videos &&
        videos.map((v) => {
          return (
            <iframe
              className={classes.iframe}
              title={v.title}
              src={v.link}
              frameBorder="0"
              //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          );
        })}
    </ul>
  );
};

export default VideoList;
