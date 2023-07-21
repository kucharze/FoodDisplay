import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import React from "react";
import App from "./App";
//-------------{Routing}
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
