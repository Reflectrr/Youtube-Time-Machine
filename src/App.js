import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ContainerBox from "./components/ContainerBox";
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
  //const videos = useSelector((state) => state.videos);

  useEffect(() => {
    fetchVideos().then((videos) => {
      dispatch(setVideos(videos));
    });
    dispatch(setClasses(classes));
  }, [classes, dispatch]);

  return (
    <div className={classes.root}>
      <Navbar />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ContainerBox>
          <Switch>
            <Route path="/videos/:id">
              <VideoView />
            </Route>

            <Route path="/">
              <NavList />
            </Route>
          </Switch>
        </ContainerBox>
      </main>
    </div>
  );
};

export default App;
