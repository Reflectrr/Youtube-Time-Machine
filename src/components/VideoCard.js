import { Card, CardMedia, Button } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedVideo,
  setSelectedChannel,
} from "../reducers/channelReducer";

const VideoCard = ({ video, channel }) => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const setVideo = () => {
    const videoInfo = {
      ...video,
      channelId: channel.channelId,
      channelTitle: channel.title,
    };
    dispatch(setSelectedVideo(videoInfo));
    dispatch(setSelectedChannel(channel));
  };
  return (
    <Button onClick={setVideo} style={{ display: "block", width: "100%" }}>
      <Card variant="outlined">
        <CardMedia className={classes.aspectRatio} image={video.thumbnail} />
      </Card>
    </Button>
  );
};

export default VideoCard;
