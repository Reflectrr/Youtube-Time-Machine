import { Card, CardMedia } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ video }) => {
  const classes = useSelector((state) => state.classes);
  return (
    <Card variant="outlined">
      <CardMedia
        className={classes.aspectRatio}
        image={`https://i.ytimg.com/vi/${video.videoId}/mqdefault.jpg`}
        title="Contemplative Reptile"
      />
      {/* <CardContent></CardContent> */}
    </Card>
  );
};

export default VideoCard;
