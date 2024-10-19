import React from "react";
import { currencyFormatter, routes } from "@nabstore/utils";
import { Card, ProdutoTitle, Info, Value } from "./styles";
import { useNavigate } from "react-router";

const CompraItem = ({ compra }) => {
  const navigate = useNavigate();

  const handleVerDetalhes = (id) => {
    navigate(routes.COMPRA.replace(":id", id));
  };

  return (
    <Card
      className="card mb-4 p-4"
      key={compra.id}
      onClick={() => handleVerDetalhes(compra.id)}
    >
      <ProdutoTitle className="card-title">
        Comprou {currencyFormatter(compra.total)} no dia{" "}
        {new Date(compra.createdAt).toLocaleDateString()}
      </ProdutoTitle>
      <div className="d-flex flex-row justify-content-around mt-3">
        <div className="d-flex flex-column">
          <Info>
            ID: <Value>{compra.id}</Value>
          </Info>
          <Info>
            Quantidade de itens:{" "}
            <Value>
              {compra.CompraItems.reduce(
                (prev, atual) => prev + atual.quantidade,
                0
              )}
            </Value>
          </Info>
        </div>
        <div className="d-flex flex-column">
          <Info>
            Previsão de entrega:{" "}
            <Value>
              {new Date(compra.estimatedDeliveryDate).toLocaleDateString()}
            </Value>
          </Info>
          <Info>
            Data de entrega:{" "}
            <Value style={{ color: "green" }}>
              {compra.deliveredAt !== null
                ? new Date(compra.deliveredAt).toLocaleDateString()
                : "Entrega em andamento."}
            </Value>
          </Info>
        </div>
      </div>
    </Card>
  );
};

export default CompraItem;
