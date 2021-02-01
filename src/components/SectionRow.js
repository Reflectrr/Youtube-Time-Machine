import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Swiper from "./Swiper";
const SubsectionRow = ({ text }) => {
  return (
    <React.Fragment>
      <Grid item sm={12}>
        <Typography variant="h3" gutterBottom>
          {text}
        </Typography>
      </Grid>
      <Swiper content={null}></Swiper>
    </React.Fragment>
  );
};

export default SubsectionRow;
