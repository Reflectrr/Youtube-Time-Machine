import React from "react";
import {
  Drawer,
  Divider,
  List,
  Hidden,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../reducers/mobileReducer";

const DrawerComponent = () => {
  const classes = useSelector((state) => state.classes);
  const mobileOpen = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  return (
    <nav aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => dispatch(toggleDrawer())}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div>
            <div className={classes.toolbar} />
            {/*TODO: replace with logo*/}
            <Divider />
            <List>
              {["Chapel of the Week", "Past Videos", "About Us"].map((text) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default DrawerComponent;
