import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ video }) => {
  const classes = useSelector((state) => state.classes);
  return (
    <Card variant="outlined">
      <a href={`https://youtube.com/watch?v=${video.videoId}`}>
        <CardMedia
          className={classes.aspectRatio}
          image={video.thumbnail}
          //image={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
        />
      </a>
      {/* <CardContent></CardContent> */}
    </Card>
  );
};

export default VideoCard;
