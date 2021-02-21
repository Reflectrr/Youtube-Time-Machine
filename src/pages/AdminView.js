import { ListItem, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryRadioGroup from "../components/CategoryRadioGroup";

const AdminView = () => {
  const allVideos = useSelector((state) => state.videos.allVideos);
  const classes = useSelector((state) => state.classes);
  // const dispatch = useDispatch();
  // const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      {/* TODO: add security */}
      {/* <Typography
        className={classes.paddingRight}
        primary={"Enter Admin Password: "}
      ></Typography>
      <TextField
        variant="outlined"
        onChange={(event) => dispatch(setPassword(event.target.value))}
        fullWidth
      /> */}
      <ul>
        {allVideos &&
          allVideos.map((v) => {
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
