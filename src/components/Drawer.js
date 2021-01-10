import React from "react";
import { Drawer, Divider, List, ListItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../reducers/mobileReducer";
import { Link } from "react-router-dom";
import { setCategory } from "../reducers/listReducer";
import { useHistory } from "react-router-dom";

const DrawerComponent = () => {
  const classes = useSelector((state) => state.classes);
  const mobileOpen = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = (category, route) => {
    dispatch(setCategory(category));
    history.push(route);
    dispatch(toggleDrawer());
  };

  return (
    <nav aria-label="mailbox folders">
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
              key="chapel-of-the-week"
              onClick={() => onClick("Chapel", "/chapel")}
            >
              <Link to="/">Chapel of the Week</Link>
            </ListItem>
            <ListItem
              button
              key="early-moring-show"
              onClick={() => onClick("EMS", "/ems")}
            >
              <Link to="/">Early Morning Show</Link>
            </ListItem>
            {/*<ListItem button key="about-us">
              <Link to="/">About us</Link>
            </ListItem>*/}
          </List>
          <Divider />
        </div>
      </Drawer>
    </nav>
  );
};

export default DrawerComponent;
