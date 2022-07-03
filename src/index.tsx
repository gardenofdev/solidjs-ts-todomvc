/* @refresh reload */
import { render } from "solid-js/web";
import { Router, hashIntegration } from "solid-app-router";

import "todomvc-app-css/index.css";
import App from "./App/index";

render(
  () => (
    <Router source={hashIntegration()}>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
