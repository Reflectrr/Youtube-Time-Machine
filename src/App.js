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
    // fetchVideos().then((videos) => {
    //   const chapelVideos = videos.filter((v) => v.type === "Chapel");
    //   const earlyMorningShows = videos.filter((v) => v.type === "EMS");
    //   dispatch(setVideos(videos, "All"));
    //   dispatch(setVideos(chapelVideos, "Chapel"));
    //   dispatch(setVideos(earlyMorningShows, "EMS"));
    // });
    async function fetchSources() {
      const allVideos = await fetchVideos();
      dispatch(setVideos(allVideos, "all"));
    }
    fetchSources();
    dispatch(setClasses(classes));
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
