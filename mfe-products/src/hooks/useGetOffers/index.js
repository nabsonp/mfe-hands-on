import { useEffect, useState } from "react";
import productsMethods from "../../services/products";

const useGetOffers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    productsMethods
      .fetchOfertas()
      .then((resp) => {
        setError(undefined);
        setData(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setData(undefined);
        setIsLoading(false);
        console.error("Erro ao carregar ofertas");
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetOffers;
