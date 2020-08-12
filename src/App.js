import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import ContainerBox from "./components/ContainerBox";
import VideoView from "./components/VideoView";
import useStyle from "./style";
import { fetchVideos } from "./services/service";
import { useDispatch, useSelector } from "react-redux";
import { setVideos } from "./reducers/videoReducer";
import { setClasses } from "./reducers/styleReducer";

const App = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  useEffect(() => {
    fetchVideos().then((videos) => {
      dispatch(setVideos(videos));
    });
    dispatch(setClasses(classes));
  }, [classes, dispatch]);

  return (
    <div>
      <Navbar />
      <ContainerBox className="VideoViewBox">
        <VideoView video={videos[0]} />
      </ContainerBox>
    </div>
  );
};

export default App;
