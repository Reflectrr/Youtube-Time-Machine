import React from "react";
import VideoView from "../VideoView";
import { Switch, Route } from "react-router-dom";
import HomePageView from "../HomePageView";
const Routing = () => {
  // TODO: change to correct routes
  return (
    <Switch>
      <Route path="/videos/:id">
        <VideoView />
      </Route>

      <Route path="/:category">
        <VideoView />
      </Route>

      <Route path="/">
        {/*the home page displays the first chapel video*/}
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
