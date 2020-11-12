import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./assets/stylesheets/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
