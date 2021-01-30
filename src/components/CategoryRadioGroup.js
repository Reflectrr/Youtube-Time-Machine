import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const CategoryRadioGroup = ({ type, handleChange }) => {
  const classes = useSelector((state) => state.classes);

  return (
    <FormControl component="fieldset" className={classes.flexGrow}>
      <RadioGroup value={type} onChange={handleChange} row>
        <FormControlLabel value="ems" control={<Radio />} label="EMS" />
        <FormControlLabel value="chapel" control={<Radio />} label="Chapel" />
        <FormControlLabel value="message" control={<Radio />} label="Message" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryRadioGroup;
