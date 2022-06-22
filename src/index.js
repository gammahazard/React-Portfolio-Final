import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Darkmode from "darkmode-js";

new Darkmode().showWidget();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
