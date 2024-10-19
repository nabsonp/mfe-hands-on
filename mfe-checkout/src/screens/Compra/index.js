import React from "react";
import { Card } from "./styles";
import { useParams } from "react-router";
import { currencyFormatter, routes } from "@nabstore/utils";
import { Anchor, Typography, LoadingIcon } from "@nabstore/styleguide";
import useGetCompra from "../../hooks/useGetCompra";
import Info from "../../components/Info";
import Value from "../../components/Value";

const Compra = () => {
  const { id } = useParams();
  const { data: compra, isLoading, error } = useGetCompra(id);

  const Content = () => {
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex justify-content-center mt-5">
          <Typography.Subtitle>
            Erro ao carregar compra de id {id}.
          </Typography.Subtitle>
        </div>
      );
    }

    return (
      <div className="d-flex flex-row">
        <Card className="card" style={{ width: "60%" }}>
          <Typography.Subtitle className="m-2 mb-4" bold>Produtos</Typography.Subtitle>
          {compra.CompraItems.map((prod) => (
            <div
              className="d-flex flex-row justify-content-between p-2"
              key={prod.id}
            >
              <Info>
                {prod.quantidade}x {prod.Produto.nome}
              </Info>
              <Value bold>
                {currencyFormatter(prod.quantidade * prod.Produto.preco)}
              </Value>
            </div>
          ))}

          <hr />

          <div className="mt-3 mb-3 d-flex  flex-row justify-content-between">
            <Info>Cartão:</Info>
            <Value bold style={{ color: "green" }}>
              {compra.Cartao.apelido}
            </Value>
          </div>

          <hr />

          <div className="mt-3 mb-3 d-flex align-items-center flex-row justify-content-between">
            <Info style={{ color: "#2f2f2f" }}>Valor total:</Info>
            <Value bold style={{ fontSize: 32 }}>
              {currencyFormatter(compra.total)}
            </Value>
          </div>
        </Card>

        <Card className="card" style={{ width: "40%", height: "50%" }}>
          <Typography.Subtitle className="m-2 mb-4" bold>Entrega</Typography.Subtitle>
          <Info>
            {compra.Endereco.logradouro}, {compra.Endereco.bairro} -{" "}
            {compra.Endereco.numero}
          </Info>
          <Info>
            {compra.Endereco.cidade} - {compra.Endereco.uf}
          </Info>
          <Info>CEP: {compra.Endereco.cep}</Info>

          <hr />

          <div className="mt-3 mb-1 d-flex  flex-row justify-content-between">
            <Info>Taxa de Entrega:</Info>
            <Value bold style={{ color: "green" }}>
              Grátis
            </Value>
          </div>

          <div className="mt-1 mb-1 d-flex  flex-row justify-content-between">
            <Info>Previsão de Entrega:</Info>
            <Value>
              {new Date(compra.estimatedDeliveryDate).toLocaleDateString()}
            </Value>
          </div>

          <div className="mt-1 mb-3 d-flex  flex-row justify-content-between">
            <Info>Entrega:</Info>
            {compra.deliveredAt !== null ? (
              <Value bold style={{ color: "green" }}>
                {new Date(compra.deliveredAt).toLocaleDateString()}
              </Value>
            ) : (
              <Value>Em andamento.</Value>
            )}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="container">
      <Anchor.GoBack path={routes.COMPRAS} text="Voltar as compras" />

      <div className="d-flex justify-content-center">
        <Typography.Title>Detalhes de Compra</Typography.Title>
      </div>

      <Content />
    </div>
  );
};

export default Compra;
