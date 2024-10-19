import { useState } from "react";
import checkoutMethods from "../../services/checkout";

const useCreateCompra = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const createCompra = (userId, cartaoId, enderecoId, produtos) => {
    setIsLoading(true);
    checkoutMethods
      .createCompra({
        userId,
        cartaoId,
        enderecoId,
        produtos,
      })
      .then((resp) => {
        setError(undefined);
        setData(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(undefined);
        setError(err);
        setIsLoading(false);
        console.error("Erro ao criar compra", err);
      });
  };

  return { createCompra, data, isLoading, error };
};

export default useCreateCompra;
