import React from "react";
import { NoPurchasesMessage } from "./styles";
import { routes } from "@nabstore/utils";
import { Anchor, Typography, LoadingIcon } from "@nabstore/styleguide";
import useGetCompras from "../../hooks/useGetCompras";
import CompraItem from "../../components/CompraItem";

const Compras = () => {
  const { data: compras, isLoading, error } = useGetCompras();

  const ComprasList = () => {
    if (isLoading || !compras) {
      return (
        <div className="d-flex flex-column align-items-center">
          <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>Erro ao carregar compras.</Typography.Subtitle>
        </div>
      );
    }

    if (compras.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>Você não tem compras ainda.</Typography.Subtitle>
        </div>
      );
    }

    return (
      <div className="d-flex flex-column align-items-center mb-5">
        {compras.map((compra) => (
          <CompraItem key={compra.id} compra={compra} />
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <Anchor.GoBack path={routes.HOME} text="Voltar aos produtos" />

      <div className="d-flex justify-content-center">
        <Typography.Title>Minhas Compras</Typography.Title>
      </div>

      <ComprasList />
    </div>
  );
};

export default Compras;
