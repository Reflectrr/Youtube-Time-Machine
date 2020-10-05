import React from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { toggleDrawer } from "../reducers/mobileReducer";
import { setCategory } from "../reducers/listReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = (category, route) => {
    dispatch(setCategory(category));
    history.push(route);
  };

  const Menu = (
    <>
      <span style={{ flexGrow: 1 }} />
      <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Hidden smDown>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => onClick("Chapel", "/")}
        >
          Chapel
        </Button>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => onClick("EMS", "/")}
        >
          Early Morning Show
        </Button>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => history.push("/")}
        >
          About Us
        </Button>
      </Hidden>
    </>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => history.push("/")}
        >
          VCFilms
        </Button>
        {Menu}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
