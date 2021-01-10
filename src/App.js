import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { useStyles } from "./style";
import { fetchVideos } from "./services/service";
import { useDispatch } from "react-redux";
import { setVideos } from "./reducers/videoReducer";
import { setClasses } from "./reducers/styleReducer";
import Drawer from "./components/Drawer";
import Routing from "./components/utils/Routing";

const App = () => {
  const classes = useStyles();
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
        <Routing />
      </main>
    </div>
  );
};

export default App;
