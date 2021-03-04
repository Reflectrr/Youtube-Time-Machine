import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createGenerateClassName,
  CssBaseline,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { customTheme } from "./style";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

const generateClassName = createGenerateClassName({
  productionPrefix: "app",
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
