import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useStyles } from "./style";
import { useDispatch } from "react-redux";
import { setClasses } from "./reducers/styleReducer";
import Drawer from "./components/Drawer";
import Routing from "./components/utils/Routing";
import { parse } from "crypto-js/enc-hex";
import { setToken } from "./reducers/userReducer";
import { getSubscribedChannels } from "./services/service";

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
      dispatch(setToken(token));
      fetchChannels(token);
    }
    async function fetchChannels(token) {
      await getSubscribedChannels(token);
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
