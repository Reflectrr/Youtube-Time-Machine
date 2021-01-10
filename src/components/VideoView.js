import React from "react";
import { Grid, Container } from "@material-ui/core";
import NavList from "./NavList";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VideoView = () => {
  const allVideos = useSelector((state) => state.videos.allVideos);
  const classes = useSelector((state) => state.classes);
  const { id } = useParams();
  const video = allVideos.find((v) => v.id.toString() === id);
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <NavList currentVideoId={video ? video.id : undefined} />
      </Grid>
      <Grid item xs={12} md={9}>
        {video ? (
          <Container className={classes.iframeContainer}>
            <iframe
              className={classes.iframe}
              title={video.title}
              src={video.link}
              frameBorder="0"
              //allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Container>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default VideoView;
