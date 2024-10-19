import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { usersRoutes } from "@nabstore/utils";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CreateColaborador from "./screens/CreateColaborador";
import Enderecos from "./screens/Enderecos";

const App = ({ name, store, loginAction, selectEnderecoAction }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="container-sm mt-5">
        <Routes>
          <Route
            exact
            path={usersRoutes.LOGIN}
            element={<Login loginAction={loginAction} />}
          />
          <Route exact path={usersRoutes.SIGNUP} element={<Signup />} />
          <Route
            exact
            path={usersRoutes.CREATE_COLABORADOR}
            element={<CreateColaborador />}
          />
          <Route
            exact
            path={usersRoutes.ENDERECOS}
            element={<Enderecos selectEnderecoAction={selectEnderecoAction} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
