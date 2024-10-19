import { useEffect, useState } from "react";
import productsMethods from "../../services/products";

const useGetProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [page, setPage] = useState(1);

  const changeProductsPage = (increment) => {
    setIsLoading(true);
    productsMethods
      .fetchProdutos(page + increment)
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
        setError(undefined);
        setPage(page + increment);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao carregar produtos.", error);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    productsMethods
      .fetchProdutos()
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
        setError(undefined);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao carregar produtos.", error);
      });
  }, []);

  return { changeProductsPage, page, data, isLoading, error };
};

export default useGetProducts;
