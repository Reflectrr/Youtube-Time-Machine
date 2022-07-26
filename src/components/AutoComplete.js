import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { getAutoComplete, fetchChannelInformation } from "../services/service";

const AutoComplete = () => {
  const [suggestions, setSuggestions] = useState([]);

  const onChange = async (event) => {
    console.log(event.target.value);
    const response = await getAutoComplete(event.target.value);
    setSuggestions(response);
    return;
  };

  const selected = async (event) => {
    console.log(event.target.value);
    await fetchChannelInformation(event.target.value);
  };

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      options={suggestions}
      onClose={selected}
      autoComplete
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Search input"
            onChange={onChange}
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
