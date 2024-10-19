import { useState } from "react";
import checkoutMethods from "../../services/checkout";

const useGetDeliveryEstimative = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [data, setData] = useState(undefined);

  const getEstimative = (cep) => {
    setIsLoading(true);
    setError(undefined);
    checkoutMethods
      .getEstimativaEntrega(cep)
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(undefined);
        setError(err);
        setIsLoading(false);
        console.error("Erro ao calcular estimativa de entrega.", err);
      });
  };

  return { getEstimative, data, isLoading, error };
};

export default useGetDeliveryEstimative;
