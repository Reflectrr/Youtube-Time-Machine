import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Swiper from "./Swiper";
import { shuffle } from "../utils";
import { setChannelVideos } from "../reducers/channelReducer";
import { useDispatch } from "react-redux";
import { useStyles } from "../style";

const SubsectionRow = ({ channel }) => {
  // TODO: research scroll loading
  const classes = useStyles();
  const dispatch = useDispatch();
  const videos = channel.videos;
  const title = channel.title;
  const shuffleVideos = () => {
    const shuffledVideos = shuffle(channel.videos);
    dispatch(setChannelVideos(channel.channelId, shuffledVideos));
  };
  return (
    <React.Fragment>
      <Box style={{ display: "flex" }}>
        <Typography variant="h3" component="span" gutterBottom>
          {title}
        </Typography>
        <span style={{ flexGrow: 1 }} />
        <Button
          variant="text"
          onClick={shuffleVideos}
          className={classes.shuffleButtons}
        >
          Shuffle
        </Button>
      </Box>
      {videos && <Swiper channel={channel} videos={videos}></Swiper>}
    </React.Fragment>
  );
};

export default SubsectionRow;
