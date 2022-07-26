import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePageView from "../../pages/HomePageView";

const Routing = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
