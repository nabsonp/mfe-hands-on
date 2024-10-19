import { useState } from "react";
import productsMethods from "../../services/products";

const useEditProduto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  const editProduto = (id, nome, descricao, preco, estoque) => {
    setIsLoading(true);
    productsMethods
      .editProduto({
        id,
        nome,
        descricao,
        preco,
        estoque,
      })
      .then((resp) => {
        setData(resp);
        setIsLoading(false);
        setError(undefined);
      })
      .catch((error) => {
        setData(undefined);
        setError(error.response);
        setIsLoading(false);
        console.error("Erro ao editar produto.");
      });
  };

  return { editProduto, data, isLoading, error };
};

export default useEditProduto;
