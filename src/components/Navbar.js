import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { toggleDrawer } from "../reducers/mobileReducer";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
          Welcome to VCFilms Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
