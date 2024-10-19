import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { checkoutRoutes } from "@nabstore/utils";
import Cart from "./screens/Cart";
import Cartoes from "./screens/Cartoes";
import Compras from "./screens/Compras";
import Compra from "./screens/Compra";
import Checkout from "./screens/Checkout";

const App = ({
  store,
  cleanCartAction,
  selectCartAction,
  addProductToCartAction,
  removeProductFromCartAction,
}) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-sm mt-5">
        <Routes>
          <Route
            exact
            path={checkoutRoutes.CART}
            element={
              <Cart
                addProductToCartAction={addProductToCartAction}
                cleanCartAction={cleanCartAction}
                removeProductFromCartAction={removeProductFromCartAction}
              />
            }
          />
          <Route
            exact
            path={checkoutRoutes.CARDS}
            element={<Cartoes selectCartAction={selectCartAction} />}
          />
          <Route exact path={checkoutRoutes.COMPRAS} element={<Compras />} />
          <Route exact path={checkoutRoutes.COMPRA} element={<Compra />} />
          <Route exact path={checkoutRoutes.CHECKOUT} element={<Checkout cleanCartAction={cleanCartAction} />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
