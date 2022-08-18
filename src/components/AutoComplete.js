import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedChannel,
  setSelectedVideo,
} from "../reducers/channelReducer";
import { getChannelVideos } from "../services/service";

const AutoComplete = ({ inputValue }) => {
  const channels = useSelector((state) => state.channels);
  const user = useSelector((state) => state.user);
  const channelNames = channels.allChannelTitles;
  const channelIds = channels.allChannelIds;
  const dispatch = useDispatch();
  const selected = async (_event, value) => {
    if (value) {
      const index = channelNames.indexOf(value);
      const selectedChannelId = channelIds[index];
      const selectedChannelVideos = await getChannelVideos(
        selectedChannelId,
        user.token
      );
      const selectedChannelInfo = {
        title: value,
        channelId: selectedChannelId,
        videos: selectedChannelVideos,
      };
      dispatch(setSelectedChannel(selectedChannelInfo));
      dispatch(setSelectedVideo(null));
    } else {
      dispatch(setSelectedChannel(null));
    }
  };

  return (
    <Autocomplete
      id="combo-box-demo"
      options={channelNames}
      //getOptionLabel={(option) => option.title}
      autoHighlight
      value={inputValue}
      onChange={selected}
      style={{ width: 300, margin: "10px" }}
      noOptionsText="Please sign in first"
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search your subscribed Youtuber"
          variant="outlined"
        />
      )}
    />
  );
};

export default AutoComplete;
