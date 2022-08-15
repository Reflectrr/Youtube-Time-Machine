import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from "@material-ui/core";
import { toggleDrawer } from "../reducers/mobileReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import OAuth from "./OAuth";
import { setUser } from "../reducers/userReducer";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.user.user);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (route) => {
    setAnchorEl(null);
    if (typeof route === "string") history.push(`/${route}`);
  };

  //const Dropdown = (
  //<div>
  //<Button
  //aria-controls="tv-shows-menu"
  //aria-haspopup="true"
  //onClick={handleClick}
  //variant="text"
  //className={classes.toolbarButtons}
  //>
  //TV Shows
  //</Button>
  //<Menu
  //id="tv-shows-menu"
  //anchorEl={anchorEl}
  //keepMounted
  //open={Boolean(anchorEl)}
  //onClose={handleClose}
  //getContentAnchorEl={null}
  //anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
  //transformOrigin={{ vertical: "top", horizontal: "center" }}
  //>
  //<MenuItem onClick={() => handleClose("ems")}>
  //Early Morning Shows
  //</MenuItem>
  //<MenuItem onClick={() => handleClose("message")}>The Message</MenuItem>
  //<MenuItem onClick={() => handleClose("other")}>The Others</MenuItem>
  //</Menu>
  //</div>
  //);

  const logInButton = user ? (
    <>
      <img
        src={user.picture}
        alt="profile"
        className={classes.profilePicture}
      />
      Sign out
    </>
  ) : (
    <OAuth />
  );

  const BarMenu = (
    <>
      <Button
        variant="text"
        className={classes.toolbarButtons}
        onClick={() => history.push("/")}
      >
        Home
      </Button>
      <Button
        variant="text"
        className={classes.toolbarButtons}
        onClick={() => history.push("/about")}
      >
        About
      </Button>
      <span style={{ flexGrow: 1 }} />
      {/*     <Hidden mdUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => dispatch(toggleDrawer())}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>*/}
      <Hidden smDown>
        <Button
          variant="text"
          className={classes.toolbarButtons}
          onClick={() => dispatch(setUser({}))}
        >
          {logInButton}
        </Button>
      </Hidden>
    </>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>{BarMenu}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
