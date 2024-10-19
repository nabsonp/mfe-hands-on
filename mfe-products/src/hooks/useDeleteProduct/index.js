import { useState } from "react";
import productsMethods from "../../services/products";

const useDeleteProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const deleteProduct = (id) => {
    setIsLoading(true);
    productsMethods
      .deleteProduto(id)
      .then((resp) => {
        setData(true);
        setIsLoading(false);
        setError(undefined);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao deletar produto.");
      });
  };

  return { deleteProduct, data, isLoading, error };
};

export default useDeleteProduct;
