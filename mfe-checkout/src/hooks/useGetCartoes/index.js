import { useEffect, useState } from "react";
import checkoutMethods from "../../services/checkout";

const useGetCartoes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    checkoutMethods
      .fetchCartoes()
      .then((resp) => {
        setError(undefined);
        setData(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setData(undefined);
        setIsLoading(false);
        console.error("Erro ao carregar catões");
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetCartoes;
