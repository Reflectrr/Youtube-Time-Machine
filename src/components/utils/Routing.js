import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminView from "../../pages/AdminView";
import ChapelView from "../../pages/ChapelView";
import HomePageView from "../../pages/HomePageView";
import EMSView from "../../pages/EMSView";
import MessageView from "../../pages/MessageView";
import OthersView from "../../pages/OthersView";

import AdminVideoView from "../AdminVideoView";

const Routing = () => {
  return (
    <Switch>
      <Route path="/admin">
        <Switch>
          <Route path="/admin/:videoId">
            <AdminVideoView />
          </Route>
          <Route path="/admin">
            <AdminView />
          </Route>
        </Switch>{" "}
      </Route>
      <Route path="/chapel">
        <ChapelView />
      </Route>
      <Route path="/ems">
        <EMSView />
      </Route>
      <Route path="/message">
        <MessageView />
      </Route>
      <Route path="/other">
        <OthersView />
      </Route>
      {/* TODO: figure out about videos */}
      {/* <Route path="/about"></Route> */}
      <Route path="/">
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
