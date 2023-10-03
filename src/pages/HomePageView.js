import React from "react";
import { useSelector } from "react-redux";
import SectionRow from "../components/SectionRow";
import FeaturingSection from "../components/FeaturingSection";
import { Typography, Button } from "@material-ui/core";
import { useStyles } from "../style";
import SubsectionRowStacking from "../components/SectionRowStacking";

const HomePageView = () => {
  const classes = useStyles();
  const channels = useSelector((state) => state.channels);
  const user = useSelector((state) => state.user);
  const selectedChannel = channels.selectedChannel;
  const selectedVideo = channels.selectedVideo;

  const SectionRows = channels.homepage.map((channel, index) => {
    return (
      <SectionRow
        channel={channel}
        key={`sectionRow-${channel.channelId}-${index}`}
      />
    );
  });

  const logIn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly&include_granted_scopes=true&client_id=864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&state=pineapple`;
  };

  return (
    <div>
      {!user.token && (
        <React.Fragment>
          <Typography component="h1" variant="h3" gutterBottom>
            Welcome to Youtube Time Machine!
          </Typography>
          <Typography component="h2" variant="subtitle1" gutterBottom>
            This website is a personal project that aims to explore interesting
            contents of your favorite Youtubers through randomized suggestions.
          </Typography>
          <Typography component="span" variant="subtitle1" gutterBottom>
            To get started, sign into your Youtube account here:{" "}
          </Typography>

          <Button
            variant="contained"
            className={classes.toolbarButtons}
            onClick={logIn}
          >
            Sign in to your Youtube account
          </Button>
        </React.Fragment>
      )}
      {selectedVideo && <FeaturingSection video={selectedVideo} />}

      {selectedChannel ? (
        <SubsectionRowStacking
          channel={selectedChannel}
          key={`sectionRow-selected-${selectedChannel.channelId}`}
        />
      ) : (
        SectionRows
      )}
    </div>
  );
};

export default HomePageView;
