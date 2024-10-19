import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import BestOffersFragment from "./fragments/BestOffersFragment";
import ProductImageFragment from "./fragments/ProductImagemFragment";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return (
      <h1 className="mt-16">
        Erro ao carregar micro frontend products: {err.message}
      </h1>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
export { BestOffersFragment, ProductImageFragment };
