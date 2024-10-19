import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./containers/App";
import "bootstrap/dist/css/bootstrap.css";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
});

export const { bootstrap, mount, unmount } = lifecycles;

function domElementGetter() {
  return document.getElementById("root")
}
