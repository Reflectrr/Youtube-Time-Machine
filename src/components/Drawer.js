import React from "react";
import { Drawer, Divider, List, ListItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../reducers/mobileReducer";
import { useHistory } from "react-router-dom";

const DrawerComponent = () => {
  const classes = useSelector((state) => state.classes);
  const mobileOpen = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = (route) => {
    history.push(route);
    dispatch(toggleDrawer());
  };

  return (
    <nav aria-label="navigation drawer">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={() => dispatch(toggleDrawer())}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <div className={classes.toolbar} />
          {/*TODO: replace with logo*/}
          <Divider />
          <List>
            <ListItem
              button
              key="burger-list-home"
              onClick={() => onClick("/")}
            >
              Home
            </ListItem>
            <Divider />
            <ListItem
              button
              key="chapel-of-the-week"
              onClick={() => onClick("/chapel")}
            >
              Chapel
            </ListItem>
            <Divider />
            <ListItem
              button
              key="burger-list-ems"
              onClick={() => onClick("/ems")}
            >
              Early Morning Show
            </ListItem>
            <ListItem
              button
              key="burger-list-message"
              onClick={() => onClick("/message")}
            >
              The Message
            </ListItem>
            <ListItem
              button
              key="burger-list-others"
              onClick={() => onClick("/others")}
            >
              The Others
            </ListItem>
            <Divider />
            <ListItem
              button
              key="burger-list-about"
              onClick={() => onClick("/about")}
            >
              About Us
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default DrawerComponent;
