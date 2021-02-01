import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Slider from "./Swiper";

const SubsectionRow = ({ text }) => {
  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>

      <Slider></Slider>
    </React.Fragment>
  );
};

export default SubsectionRow;
