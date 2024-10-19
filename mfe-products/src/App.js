import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productsRoutes } from "@nabstore/utils";
import About from "./screens/About";
import Produtos from "./screens/Produtos";
import Produto from "./screens/Produto";

const App = ({ name, store, addProductToCartAction }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-sm mt-5">
        <Routes>
          <Route exact path={productsRoutes.ABOUT} element={<About />} />
          <Route exact path={productsRoutes.PRODUTOS} element={<Produtos />} />
          <Route
            exact
            path={productsRoutes.PRODUTO}
            element={
              <Produto addProductToCartAction={addProductToCartAction} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
