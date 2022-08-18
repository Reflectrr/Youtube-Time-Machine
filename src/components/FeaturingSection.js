import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const FeaturingSection = ({ video }) => {
  const classes = useSelector((state) => state.classes);
  console.log(video);
  return (
    <Box>
      <Typography variant="h3" className={classes.featuringTitle}>
        You're now watching: {video.channelTitle}
      </Typography>
      <Box className={classes.iframeContainer}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            width: "80%",
            height: "100%",
            padding: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturingSection;
