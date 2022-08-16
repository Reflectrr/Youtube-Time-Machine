import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { setClasses } from "./reducers/styleReducer";
import Drawer from "./components/Drawer";
import Routing from "./components/utils/Routing";
import { setToken, setSubscriptions } from "./reducers/userReducer";
import {
  getSubscribedChannels,
  getAllChannelVideos,
  getSubscribedChannelIds,
} from "./services/service";
import { setVideoInfo } from "./reducers/channelReducer";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setClasses(classes));
    const parsedHash = new URLSearchParams(
      window.location.hash.substring(1) // skip the first char (#)
    );
    const token = parsedHash.get("access_token");
    const state = parsedHash.get("state");
    if (state === "pineapple" && token != null) {
      // user authorized
      dispatch(setToken(token));
      const fetchChannels = async (token) => {
        const channelIds = await getSubscribedChannelIds(token);
        // TODO: fetch all subscriptions
        console.log(channelIds);
        const fetchedVideos = await getAllChannelVideos(channelIds, token);
        console.log(fetchedVideos);
        dispatch(setVideoInfo(fetchedVideos));
      };
      // fetch channels and video thumbnails
      fetchChannels(token);
    }
  }, [classes, dispatch]);

  return (
    // <div className={classes.root}>
    <div>
      <Navbar />
      <Drawer />
      <main className={classes.bigPadding}>
        <Routing />
      </main>
    </div>
  );
};

export default App;
