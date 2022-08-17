import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useStyles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setClasses } from "./reducers/styleReducer";
import Drawer from "./components/Drawer";
import Routing from "./components/utils/Routing";
import { setToken } from "./reducers/userReducer";
import {
  fetchChannels,
  getUserProfileInfo,
  handleCallbackResponse,
  verifyToken,
} from "./components/utils/asyncFunctions";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // check if there is token
    // if not, try fetch it from url
    // if yes, user authorized, continue next steps
    if (!user.token) {
      // try fetch it from url
      const parsedHash = new URLSearchParams(
        window.location.hash.substring(1) // skip the first char (#)
      );
      const token = parsedHash.get("access_token");
      const state = parsedHash.get("state");

      if (state === "pineapple") {
        // found token in the url
        dispatch(setToken(token));
        verifyToken(token);
        // fetch channels and video thumbnails
        fetchChannels(token, dispatch);
        getUserProfileInfo(token, dispatch);
      }
      // wait for user to login
    } else {
      // token exist and user authorized
      getUserProfileInfo(user.token, dispatch);
    }
    dispatch(setClasses(classes));
  }, [classes, dispatch, user.token]);

  return (
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
