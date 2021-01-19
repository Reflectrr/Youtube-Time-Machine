import {
  Button,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateVideo } from "../services/service";

const AdminVideoView = () => {
  const { videoId } = useParams();
  const video = useSelector((state) =>
    state.videos.allVideos.find((v) => v.videoId === videoId)
  );
  const classes = useSelector((state) => state.classes);
  // TODO: check reliability
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);

  if (!video) return null;
  if (title === null) setTitle(video.title);
  if (description === null) setDescription(video.description);
  if (type === null) setType(video.type);

  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleClick = async () => {
    await updateVideo({ title, description, type }, video);
  };

  console.log(video);
  return (
    <List>
      <ListItem>
        <ListItemText primary={"Title: "}></ListItemText>
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
        <ListItemText primary={"Description: "}></ListItemText>
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
      <Button onClick={handleClick}>Save</Button>
    </List>
  );
};

export default AdminVideoView;
