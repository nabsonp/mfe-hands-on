import { useEffect, useState } from "react";
import checkoutMethods from "../../services/checkout";

const useGetCompra = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    checkoutMethods
      .fetchCompraById(id)
      .then((resp) => {
        setError(undefined);
        setData(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setData(undefined);
        setIsLoading(false);
        console.error(`Erro ao carregar compra de id ${id}.`);
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetCompra;
