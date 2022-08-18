import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePageView from "../../pages/HomePageView";
import AboutPageView from "../../pages/AboutPageView";

const Routing = () => {
  return (
    <Switch>
      <Route path="/about">
        <AboutPageView />
      </Route>
      <Route path="/">
        <HomePageView />
      </Route>
    </Switch>
  );
};

export default Routing;
