import React, { useState } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
//import { toggleDrawer } from "../reducers/mobileReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Hidden } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { setUser } from "../reducers/userReducer";
import {
  setHomepageInfo,
  setSelectedChannel,
} from "../reducers/channelReducer";
import { revokeToken } from "../services/service";
import AutoComplete from "./AutoComplete";

const Navbar = () => {
  const classes = useSelector((state) => state.classes);
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState(null);
  const user = useSelector((state) => state.user);
  const userInfo = user.user;

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
  const logOut = async () => {
    dispatch(setUser(null));
    dispatch(setHomepageInfo([]));
    await revokeToken(user.token);
    history.push("/");
    setInputValue(null);
  };

  const logIn = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube.readonly&include_granted_scopes=true&client_id=864445880843-lafkj1dgakaf8hh8h235i3ngh9q9cou7.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=token&state=pineapple`;
  };

  const button = userInfo ? (
    <Button variant="text" className={classes.toolbarButtons} onClick={logOut}>
      {userInfo.picture ? (
        <img
          src={userInfo.picture}
          alt="profile"
          className={classes.profilePicture}
        />
      ) : (
        ""
      )}
      Sign Out
    </Button>
  ) : (
    <Button variant="text" className={classes.toolbarButtons} onClick={logIn}>
      Sign in to your Youtube account
    </Button>
  );

  const BarMenu = (
    <>
      <Button
        variant="text"
        className={classes.toolbarButtons}
        onClick={() => {
          history.push("/");
          dispatch(setSelectedChannel(null));
        }}
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
      <AutoComplete inputValue={inputValue} />

      <Hidden smDown>{button}</Hidden>
    </>
  );

  return (
    <AppBar position="sticky">
      <Toolbar>{BarMenu}</Toolbar>
    </AppBar>
  );
};

export default Navbar;
