import { ListItem } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryRadioGroup from "./CategoryRadioGroup";

const AdminView = () => {
  const allVideos = useSelector((state) => state.videos.allVideos);
  const classes = useSelector((state) => state.classes);

  if (!allVideos) return null;

  return (
    <React.Fragment>
      <ul>
        {allVideos.map((v) => {
          return (
            <ListItem key={`admin-video-${v.videoId}`}>
              <Link
                to={`/admin/${v.videoId}`}
                className={`${classes.whiteText} ${classes.flexGrow}`}
              >
                {v.title}
              </Link>
              <CategoryRadioGroup video={v} save />
            </ListItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default AdminView;
