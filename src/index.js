import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";

const DEFAULT_SETTING = {
  gameStarted: false,
  instructionsExpanded: false
};

const rootReducers = () => {
  return DEFAULT_SETTING;
};
const store = createStore(rootReducers);

console.log("store:", store);
ReactDom.render(<App />, document.querySelector("#root"));
