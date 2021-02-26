import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

// TODO: finish this component
const FeaturingSection = ({ video }) => {
  const classes = useSelector((state) => state.classes);
  console.log(video);
  return (
    <Box
      className={classes.featuringBox}
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <header></header>
      <Box>
        <Typography component="h1" className={classes.featuringTitle}>
          {video.title}
        </Typography>
        <Button variant="contained">Play</Button>
        <Typography component="h2" className={classes.featuringDescription}>
          {video.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturingSection;
