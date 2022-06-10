import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Themer from "./components/basic-components/theme/ThemeContext";

ReactDOM.render(
  <Themer>
    <App />
  </Themer>,

  document.getElementById("root")
);
