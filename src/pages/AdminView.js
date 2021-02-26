import { Box, Button, ListItem, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminPasswordField from "../components/AdminPasswordField";
import CategoryRadioGroup from "../components/CategoryRadioGroup";
import { refreshVideos, fetchVideos } from "../services/service";
import { setVideos } from "../reducers/videoReducer";

const AdminView = () => {
  const allVideos = useSelector((state) => state.videos.allVideos);
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const refresh = async () => {
    const response = await refreshVideos();
    console.log(response);
    if (response.status === 200) {
      setMessage("Successfully refreshed!");
      const allVideos = await fetchVideos();
      dispatch(setVideos(allVideos, "all"));
      setTimeout(() => {
        setMessage(null);
      }, 1000);
    }
  };
  return (
    <React.Fragment>
      <ul>
        <ListItem>
          <AdminPasswordField />
          <Box className={classes.paddingRight}>
            <Button variant="contained" color="default" onClick={refresh}>
              Refresh
            </Button>
          </Box>
          <Typography display="inline">{message}</Typography>
        </ListItem>
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
