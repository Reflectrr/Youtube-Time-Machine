import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateVideo } from "../services/service";
import CategoryRadioGroup from "./CategoryRadioGroup";
import { fetchVideos } from "../services/service";
import { setVideos } from "../reducers/videoReducer";
import {
  resetChangeVideo,
  setChangeVideo,
  setDescription,
  setTitle,
} from "../reducers/changeReducer";

const AdminVideoView = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const video = useSelector((state) =>
    state.videos.allVideos.find((v) => v.videoId === videoId)
  );
  const change = useSelector((state) => state.change);
  const classes = useSelector((state) => state.classes);
  const history = useHistory();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    dispatch(setChangeVideo(video));
    console.log("changed");
  }, [video, dispatch]);

  if (!video) return null;
  const submit = async () => {
    const response = await updateVideo(change.videoContent, change.videoId);
    if (response.status === 200) {
      setMessage("Successfully saved!");
      const allVideos = await fetchVideos();
      dispatch(setVideos(allVideos, "all"));
      setTimeout(() => {
        setMessage(null);
        history.push("/admin");
      }, 1000);
      dispatch(resetChangeVideo());
    }
    return;
  };

  return (
    <List>
      <ListItem>
        <ListItemText
          className={classes.paddingRight}
          primary={"Title: "}
        ></ListItemText>
        <TextField
          variant="outlined"
          defaultValue={video.title}
          onChange={(event) => dispatch(setTitle(event.target.value))}
          fullWidth
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={`VideoID: ${video.videoId} `}></ListItemText>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemText
          className={classes.paddingRight}
          primary={"Description: "}
        ></ListItemText>
        <TextField
          variant="outlined"
          defaultValue={video.description}
          onChange={(event) => dispatch(setDescription(event.target.value))}
          fullWidth
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Date: ${video.date}`}></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary={`Type: ${video.type}`}></ListItemText>
        <CategoryRadioGroup video={video} flexGrow />
      </ListItem>
      <ListItem>
        <Link
          to="/admin"
          className={`${classes.buttonLink} ${classes.paddingRight}`}
        >
          <Button
            variant="contained"
            onClick={() => dispatch(resetChangeVideo())}
          >
            Back
          </Button>
        </Link>
        <Box className={classes.paddingRight}>
          <Button
            variant="contained"
            onClick={submit}
            className={classes.paddingRight}
          >
            Save
          </Button>
        </Box>
        <Typography display="inline" className={classes.paddingRight}>
          {message}
        </Typography>
      </ListItem>
    </List>
  );
};

export default AdminVideoView;
