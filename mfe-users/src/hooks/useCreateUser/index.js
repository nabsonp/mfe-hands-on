import { useState } from "react";
import { useNavigate } from "react-router";
import { routes, tipoUsuario } from "@nabstore/utils";
import usersMethods from "../../services/users";

const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const createUser = async (nome, email, senha, tipoUsuarioId) => {
    setIsLoading(true);
    usersMethods
      .createUsuario({
        nome,
        email,
        senha,
        tipoUsuarioId,
      })
      .then((resp) => {
        setData(resp);
        setError(undefined);
        setIsLoading(false);
        if (tipoUsuarioId === tipoUsuario.CLIENTE) {
          navigate(routes.LOGIN);
        } else {
          navigate(routes.HOME);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.error("Erro ao criar usuário.", err);
      });
  };

  return { createUser, data, isLoading, error };
};

export default useCreateUser;
