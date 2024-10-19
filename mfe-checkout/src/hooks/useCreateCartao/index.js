import { useState } from "react";
import { useNavigate } from "react-router";
import checkoutMethods from "../../services/checkout";

const useCreateCartao = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const navigate = useNavigate();

  const createCartao = (number, apelido, cvv, titular, validade) => {
    setIsLoading(true);
    checkoutMethods
      .createCartao({
        number,
        apelido,
        cvv,
        titular,
        validade,
      })
      .then((resp) => {
        setError(undefined);
        setIsLoading(false);
        navigate(0);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        console.error("Erro ao criar cartão", err);
      });
  };

  return { createCartao, isLoading, error };
};

export default useCreateCartao;
