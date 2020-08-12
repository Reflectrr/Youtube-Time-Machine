import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Button,
  Container,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton
            style={{ marginRight: 8 }}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: "center" }}>
            Welcome to VCFilms Website
          </Typography>
          <Button color="inherit">Videos</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
