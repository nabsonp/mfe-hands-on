import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { routes } from "@nabstore/utils";
import usersMethods from "../../services/users";

const useLogin = (loginAction) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const login = async (email, password) => {
    setIsLoading(true);
    usersMethods
      .login({ email, password })
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
        setError(undefined);
        dispatch(loginAction(resp));
        if (cart.produtos.length > 0) navigate(routes.ENDERECOS);
        else navigate(routes.HOME);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response?.status === 400) {
          setError(err.response);
          return;
        }
        console.error("Erro ao fazer login", err);
      });
  };

  return { login, data, isLoading, error };
};

export default useLogin;
