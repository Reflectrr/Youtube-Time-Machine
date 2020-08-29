import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
