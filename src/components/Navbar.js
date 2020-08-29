import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { toggleDrawer } from "../reducers/mobileReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const history = useHistory();

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
        <Button
          variant="text"
          style={{ color: "white", display: "block", width: "100%" }}
          onClick={() => history.push("/")}
        >
          Welcome to VCFilms Website
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
