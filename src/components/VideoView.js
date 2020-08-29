import React from "react";
import { Grid, Container } from "@material-ui/core";
import NavList from "./NavList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoView = () => {
  const videos = useSelector((state) => state.videos);
  const classes = useSelector((state) => state.classes);
  const { id } = useParams();
  const video = videos.find((v) => v.id.toString() === id);
  if (!video) return null;
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <NavList currentVideoId={video.id} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Container className={classes.iframeContainer}>
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
        </Container>
      </Grid>
    </Grid>
  );
};

export default VideoView;
