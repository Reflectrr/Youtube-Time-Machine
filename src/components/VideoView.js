import React from "react";
import { Grid } from "@material-ui/core";
import NavList from "./NavList";

const VideoView = ({ video }) => {
  if (!video) return null;
  return (
    <Grid container>
      <Grid item xs={12} md={3} style={{ border: "2px dashed" }}>
        <NavList currentVideoId={video.id} />
      </Grid>
      <Grid item xs={12} md={9} style={{ border: "2px dashed" }}>
        <iframe
          title={video.title}
          width="560"
          height="315"
          src={video.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ display: "block", margin: "1rem auto" }}
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default VideoView;
