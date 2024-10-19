import { useState } from "react";
import productsMethods from "../../services/products";

const useCreateProduto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const createProduto = (formData) => {
    setIsLoading(true);
    productsMethods
      .createProduto(formData)
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
        setError(undefined);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao criar produto.");
      });
  };

  return { createProduto, data, isLoading, error };
};

export default useCreateProduto;
