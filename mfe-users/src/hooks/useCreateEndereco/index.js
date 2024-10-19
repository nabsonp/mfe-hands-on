import { useState } from "react";
import { useNavigate } from "react-router";
import usersMethods from "../../services/users";

const useCreateEndereco = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const createEndereco = async (logradouro, bairro, numero, cep, uf, cidade) => {
    setIsLoading(true);
    usersMethods
      .createEndereco({
        logradouro,
        bairro,
        numero,
        cep,
        uf,
        cidade,
      })
      .then((resp) => {
        navigate(0);
        setData(resp);
        setError(undefined);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        console.error("Erro ao criar endereço.", err);
      });
  };

  return { createEndereco, data, isLoading, error };
};

export default useCreateEndereco;
