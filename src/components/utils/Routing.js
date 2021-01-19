import React from "react";
import VideoView from "../VideoView";
import AdminView from "../AdminView";
import { Switch, Route } from "react-router-dom";
import HomePageView from "../HomePageView";
import AdminVideoView from "../AdminVideoView";

const Routing = () => {
  // TODO: change to correct routes
  return (
    <Switch>
      {/* <Route path="/videos/:id">
        <VideoView />
      </Route>

      <Route path="/:category">
        <VideoView />
      </Route> */}

      <Route path="/admin/:videoId">
        <AdminVideoView />
      </Route>
      <Route path="/admin">
        <AdminView />
      </Route>

      <Route path="/">
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
