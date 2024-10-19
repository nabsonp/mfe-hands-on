import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";
import DeliveryEstimateFragment from "./fragments/DeliveryEstimateFragment";
import LastPurchasesFragment from "./fragments/LastPurchasesFragment";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return (
      <h1 className="mt-16">
        Erro ao carregar micro frontend checkout: {err.message}
      </h1>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
export { DeliveryEstimateFragment, LastPurchasesFragment };
