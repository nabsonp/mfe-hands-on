import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return (
      <h1 className="mt-16">
        Erro ao carregar micro frontend users: {err.message}
      </h1>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// https://single-spa-playground.org/playground/instant-test?name=@nabstore/mfe-users&url=3020