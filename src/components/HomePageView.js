import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const HomePageView = () => {
  const classes = useSelector((state) => state.classes);
  const video = useSelector(
    (state) => state.videos.chapelVideos[state.videos.chapelVideos.length - 1]
  );
  if (!video) return null;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          className={classes.centeredText}
          variant="h3"
          component="h1"
          gutterBottom
        >
          Chapel of the Week
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container className={classes.iframeContainer}>
          <iframe
            className={classes.iframe}
            title={video.title}
            src={video.link}
            //allow="accelerometer; autoplay; encrypted-media; gyrocope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </Container>
      </Grid>
    </Grid>
  );
};

export default HomePageView;
