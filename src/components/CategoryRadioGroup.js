import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../reducers/changeReducer";
import { setVideos } from "../reducers/videoReducer";
import { fetchVideos, updateVideo } from "../services/service";

const CategoryRadioGroup = ({ flexGrow, video, save }) => {
  const classes = useSelector((state) => state.classes);
  const changeType = useSelector((state) => state.change.videoContent.type);
  const type = changeType ? changeType : video.type;
  const dispatch = useDispatch();

  const handleChange = async (event) => {
    if (save) {
      const response = await updateVideo(
        { type: event.target.value },
        video.videoId
      );
      if (response.status === 200) {
        const allVideos = await fetchVideos();
        dispatch(setVideos(allVideos, "all"));
      }
    } else {
      dispatch(setType(event.target.value));
    }
  };

  return (
    <FormControl
      component="fieldset"
      className={flexGrow ? classes.flexGrow : null}
    >
      <RadioGroup value={type} onChange={(event) => handleChange(event)} row>
        <FormControlLabel value="ems" control={<Radio />} label="EMS" />
        <FormControlLabel value="chapel" control={<Radio />} label="Chapel" />
        <FormControlLabel value="message" control={<Radio />} label="Message" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryRadioGroup;
