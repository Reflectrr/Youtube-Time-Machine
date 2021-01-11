import React from "react";
import { Grid, Typography } from "@material-ui/core";

const SubsectionRow = ({ text }) => {
  return (
    <Grid item sm={12}>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>
    </Grid>
  );
};

export default SubsectionRow;
