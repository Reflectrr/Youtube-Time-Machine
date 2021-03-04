import React from "react";
import { Typography, TextField, Box } from "@material-ui/core";
import { setPassword } from "../reducers/adminReducer";
import { useDispatch, useSelector } from "react-redux";

const AdminPasswordField = () => {
  const password = useSelector((state) => state.admin.password);
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Typography className={classes.paddingRight}>
        Enter Admin Password To Make Change:{" "}
      </Typography>
      <Box className={classes.paddingRight}>
        <TextField
          type="password"
          variant="outlined"
          value={password}
          onChange={(event) => dispatch(setPassword(event.target.value))}
        />
      </Box>
    </React.Fragment>
  );
};

export default AdminPasswordField;
