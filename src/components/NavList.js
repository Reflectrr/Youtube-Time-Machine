import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavList = ({ currentVideoId }) => {
  const videos = useSelector((state) => state.videos);
  const classes = useSelector((state) => state.classes);
  return (
    <ul>
      {videos.map((v) => {
        return (
          <li key={`video-${v.title}`} className={classes.videoListItem}>
            {v.id === currentVideoId ? (
              v.title
            ) : (
              <Link to={`/videos/${v.id}`}>{v.title}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
