import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import VideoView from "./components/VideoView";
import useStyle from "./style";
import { fetchVideos } from "./services/service";
import { useDispatch } from "react-redux";
import { setVideos } from "./reducers/videoReducer";
import { setClasses } from "./reducers/styleReducer";
import { Switch, Route } from "react-router-dom";
import NavList from "./components/NavList";
import Drawer from "./components/Drawer";

const App = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchVideos().then((videos) => {
      const chapelVideos = videos.filter((v) => v.type === "Chapel");
      const earlyMorningShows = videos.filter((v) => v.type === "EMS");
      dispatch(setVideos(videos, "All"));
      dispatch(setVideos(chapelVideos, "Chapel"));
      dispatch(setVideos(earlyMorningShows, "EMS"));
    });
    dispatch(setClasses(classes));
  }, [classes, dispatch]);

  return (
    <div className={classes.root}>
      <Navbar />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/videos/:id">
            <VideoView />
          </Route>

          <Route path="/">
            <NavList />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
