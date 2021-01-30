import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateVideo } from "../services/service";

const AdminVideoView = () => {
  const { videoId } = useParams();
  const video = useSelector((state) =>
    state.videos.allVideos.find((v) => v.videoId === videoId)
  );
  const classes = useSelector((state) => state.classes);
  const history = useHistory();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState(null);

  if (!video) return null;
  if (title === null) setTitle(video.title);
  if (description === null) setDescription(video.description);
  if (type === null) setType(video.type);

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleClick = async () => {
    const response = await updateVideo(
      { title, description, type },
      video.videoId
    );
    // TODO: make status easier to find
    if (response.status === 200) {
      setMessage("Successfully saved!");
      setTimeout(() => {
        setMessage(null);
        history.push("/admin");
      }, 1000);
    }
    return;
  };

  console.log(video);
  return (
    <List>
      <ListItem>
        <ListItemText
          className={classes.paddingRight}
          primary={"Title: "}
        ></ListItemText>
        <TextField
          variant="outlined"
          defaultValue={title ? title : ""}
          onChange={setTitle}
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
          defaultValue={description ? description : ""}
          onChange={setDescription}
          fullWidth
        />
      </ListItem>
      <ListItem>
        <ListItemText primary={`Date: ${video.date}`}></ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText primary={`Type: ${type}`}></ListItemText>
        <FormControl component="fieldset" className={classes.flexGrow}>
          <RadioGroup value={type} onChange={handleChange} row>
            <FormControlLabel value="ems" control={<Radio />} label="EMS" />
            <FormControlLabel
              value="chapel"
              control={<Radio />}
              label="Chapel"
            />
            <FormControlLabel
              value="message"
              control={<Radio />}
              label="Message"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </ListItem>
      <ListItem>
        <Link
          to="/admin"
          className={`${classes.buttonLink} ${classes.paddingRight}`}
        >
          <Button variant="contained">Back</Button>
        </Link>
        <Box className={classes.paddingRight}>
          <Button
            variant="contained"
            onClick={handleClick}
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
