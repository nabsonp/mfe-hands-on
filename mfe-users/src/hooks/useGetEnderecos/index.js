import { useEffect, useState } from "react";
import usersMethods from "../../services/users";

const useGetEnderecos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    usersMethods
      .fetchEnderecos()
      .then((resp) => {
        setData(resp);
        setError(undefined);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(undefined);
        setIsLoading(false);
        setError(err);
        console.error("Erro ao carregar enderecos.", err);
      });
  }, []);

  return { data, isLoading, error };
};

export default useGetEnderecos;
