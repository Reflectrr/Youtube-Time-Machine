import React from "react";
import { Typography, TextField } from "@material-ui/core";
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
      <TextField
        type="password"
        variant="outlined"
        value={password}
        onChange={(event) => dispatch(setPassword(event.target.value))}
        className={classes.paddingRight}
      />
    </React.Fragment>
  );
};

export default AdminPasswordField;
