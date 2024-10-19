import React, { useEffect, useState } from "react";
import { Details, Title, ValorEntrega } from "./styles";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import { currencyFormatter as currencyFormat } from "@nabstore/utils";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetDeliveryEstimative from "../../hooks/useGetDeliveryEstimative";
import { notification } from "antd";

const DeliveryEstimateFragment = () => {
  const [cepEntrega, setCepEntrega] = useState("");
  const {
    getEstimative,
    data: entrega,
    isLoading,
    error,
  } = useGetDeliveryEstimative();

  const handleClick = () => {
    getEstimative(cepEntrega);
  };

  const handleCepChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/^(\d{5})(\d)/, "$1-$2");
    value = value.slice(0, 9);
    setCepEntrega(value);
  };

  useEffect(() => {
    if (error) {
      const args = {
        message: "Oops...",
        description: "Erro ao estimar entrega.",
        duration: 2,
      };
      notification.error(args);
    }
  }, [error]);

  return (
    <div className="p-3 card-body ">
      <Title>Entrega</Title>

      <div className="p-3 card-body d-flex justify-content-center">
        <input
          type="text"
          id="cepEntrega"
          className="form-control"
          placeholder="00000-000"
          value={cepEntrega}
          onChange={handleCepChange}
        />
        <Button.Primary
          width="45%"
          margin="0 10px"
          disabled={cepEntrega === ""}
          onClick={handleClick}
        >
          {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Calcular frete"}
        </Button.Primary>
      </div>

      {entrega && entrega.estimatedDeliveryDate ? (
        <div className="ms-3 me-3 card-body d-flex justify-content-between align-items-emd">
          <Details>
            <FontAwesomeIcon className="me-2" icon={faTruck} />
            Previsão de entrega dia{" "}
            {new Date(entrega.estimatedDeliveryDate).toLocaleDateString()}.
          </Details>
          <ValorEntrega>
            {entrega.preco === 0 ? "Grátis" : currencyFormat(entrega.preco)}
          </ValorEntrega>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DeliveryEstimateFragment;
