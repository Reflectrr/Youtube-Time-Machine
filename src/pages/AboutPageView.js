import React from "react";
import { useSelector } from "react-redux";
import SectionRow from "../components/SectionRow";
import FeaturingSection from "../components/FeaturingSection";
import { Typography, Button } from "@material-ui/core";
import { useStyles } from "../style";

const AboutPageView = () => {
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

  return (
    <div>
      <React.Fragment>
        <Typography variant="h3" gutterBottom>
          About Youtube Time Machine
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          This website is a personal project made by Bobby Zhou that aims to
          explore interesting contents of your favorite Youtubers through
          randomized suggestions.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          From personal experiences, sometimes the Youtube algorithm doesn't
          always provide the most interesting contents to the user, especially
          when you have watched most of the newly published videos from your
          subscribed Youtubers. In these scenarios, the past videos from your
          subscribed Youtubers might seem more interesting. Thus, through this
          "Youtube Time Machine," hopefully you can find more interesting
          contents from your favorite Youtubers.
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ fontWeight: 600 }}
          gutterBottom
        >
          Note: this website doesn't store any of your information. Be sure to
          grant access to view your Youtube account to allow the website to
          function normally. Thank you for your understanding!
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ fontWeight: 600 }}
          gutterBottom
        >
          Contact: Bobby Zhou, bobbyzhou22@gmail.com
        </Typography>
        <Typography variant="h3" gutterBottom>
          Technical Details
        </Typography>
        <Typography variant="subtitle1" component="span" gutterBottom>
          This project utilizes an array of technologies, including:{" "}
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            React, React-Redux, React-Router, Google OAuth, Youtube API,
            Material UI, SwiperJS, Axios.
          </Typography>{" "}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            React
          </Typography>{" "}
          is a component-based Javascript library for building user-interface,
          and everything on this website can be broken down into reusable
          components.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            React-Redux
          </Typography>{" "}
          is used for state management. Whenever the state of this website
          changes, such as user-login, video selected, information fetched from
          API etc, an action containing related information is dispatched, which
          then updates the store. I chose React-Redux for this project because
          it contains relatively large amount of state information, and having a
          centralized state is very useful and easy to manage.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            React-Router
          </Typography>{" "}
          is used for handling client-side routing. It controls the routes of
          the website and enables this website to be multi-paged.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            Google OAuth
          </Typography>{" "}
          is used for letting users granting this website permissions to view
          their Youtube accounts and their profile pictures. After the user
          clicks the login button, the website is redirected to Google's OAuth
          server to ask for permissions from the users. If granted permissions,
          the users will be redirected back to this website, with an
          access_token in the url. The website then stores this token in its
          state and use it to query the Youtube API on the user's behalf.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            Youtube API
          </Typography>{" "}
          provides every information that this website displays, such as video
          thumbnails, channel information, user subscriptions etc. After an
          access_token is received and verified to be valid, the Axios library
          iteratively asks the Youtube API for the user's subscription list and
          obtaining an array of channelId. Then, Axios asks for the uploadlist
          of each channel, from which the website gets an array of video
          thumbnails, which is then shuffled using Fisher-Yates (aka Knuth)
          Shuffle. All these information is stored in the state of the website
          as well.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            Material UI
          </Typography>{" "}
          is a javascript library that makes this website look modern with
          Google's Material Design principle. This website utilizes lots of
          prebuilt components from it, such as Autocomplete, Button, Grid,
          Typography, and icons. Notice that the dark theme is made available by
          this library. Also notice that this website is mobile-friendly (mobile
          users should also have a good experience with this website) thanks to
          this library's Grid component.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          <Typography
            variant="subtitle1"
            component="span"
            style={{ fontWeight: 600 }}
            gutterBottom
          >
            SwiperJS
          </Typography>{" "}
          is a modern mobile touch slider. It allows the users to have good
          experiences swiping through the video thumbnails on all platforms.
        </Typography>
      </React.Fragment>
    </div>
  );
};

export default AboutPageView;
