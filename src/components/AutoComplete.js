import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useSelector } from "react-redux";

const AutoComplete = () => {
  const channels = useSelector((state) => state.channels);
  const channelNames = channels.allChannelTitles;
  const selected = async (event) => {
    //console.log(event.target.value);
    //await fetchChannelInformation(event.target.value);
    return null;
  };

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={channelNames}
      onClose={selected}
      autoComplete
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        );
      }}
    />
  );
};

export default AutoComplete;
