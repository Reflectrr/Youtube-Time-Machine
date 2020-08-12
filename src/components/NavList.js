import React from "react";
import { useSelector } from "react-redux";

const NavList = ({ currentVideoId }) => {
  const videos = useSelector((state) => state.videos);

  return (
    <ul>
      {videos
        ? videos.map((v) => {
            return <li key={`video-${v.title}`}>{v.title}</li>;
          })
        : null}
    </ul>
  );
};

export default NavList;
