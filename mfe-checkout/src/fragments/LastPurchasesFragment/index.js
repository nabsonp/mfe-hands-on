import React from "react";
import { Anchor, Typography } from "@nabstore/styleguide";
import { currencyFormatter } from "@nabstore/utils";
import { routes } from "@nabstore/utils";
import Card from "../../components/Card";
import useGetCompras from "../../hooks/useGetCompras";

const LastPurchasesFragment = () => {
  const { data: compras } = useGetCompras();

  if (!compras || compras.length === 0) {
    return <></>;
  }

  const dadosDaEntrega = (compra) => {
    if (compra.deliveredAt) {
      return `Entrega realizada em ${new Date(
        compra.deliveredAt
      ).toLocaleDateString()}.`;
    }

    return (
      <span style={{ color: "green", fontWeight: 500 }}>
        Chega dia {new Date(compra.estimatedDeliveryDate).toLocaleDateString()}.
      </span>
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center mb-4">
      <div className="d-flex flex-row align-items-center">
        <Typography.Title className="float-start">
          Últimas Compras
        </Typography.Title>
        <Anchor.Primary className="ms-4" to={routes.COMPRAS}>
          Ver todas
        </Anchor.Primary>
      </div>
      <div className="d-flex flex-wrap mt-3 justify-content-start">
        {compras.slice(0, 4).map((compra) => (
          <Card style={{ width: "18rem" }} className="card" key={compra.id}>
            <div className="card-body">
              <h5 className="card-title">
                Feita em {new Date(compra.createdAt).toLocaleDateString()}
              </h5>
              <h1 className="card-title">{currencyFormatter(compra.total)}</h1>
              {dadosDaEntrega(compra)}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-center">
                <Anchor.Primary to={routes.COMPRA.replace(":id", compra.id)}>
                  Ver detalhes
                </Anchor.Primary>
              </li>
            </ul>
          </Card>
        ))}
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default LastPurchasesFragment;
