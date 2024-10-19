import { useEffect, useState } from "react";
import productsMethods from "../../services/products";

const useGetProduct = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    productsMethods
      .fetchProdutoById(id)
      .then((produto) => {
        setData(produto);
        setIsLoading(false);
        setError(undefined);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao carregar produto.");
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetProduct;
