import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Card } from "./styles";
import { notification } from "antd";
import { routes, currencyFormatter } from "@nabstore/utils";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import Info from "../../components/Info";
import Value from "../../components/Value";
import useCreateCompra from "../../hooks/useCreateCompra";

const Checkout = ({ cleanCartAction }) => {
  const { user, cart } = useSelector((state) => ({
    cart: state.cart,
    user: state.user,
  }));
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createCompra, data, isLoading, error } = useCreateCompra();

  useEffect(() => {
    setTotal(
      cart.produtos.reduce(
        (prev, actual) => prev + actual.qtd * actual.precoUnit,
        0
      )
    );
  }, [cart]);

  useEffect(() => {
    if (data) {
      const args = {
        message: "OBRIGADO",
        description: "Compra realizada com sucesso!",
        duration: 2,
      };
      notification.success(args);
      dispatch(cleanCartAction());
      navigate(routes.HOME);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const args = {
        message: "Oops...",
        description: "Erro ao finalizar compra.",
        duration: 2,
      };
      notification.error(args);
    }
  }, [error]);

  const handleComprar = () => {
    createCompra(
      user.id,
      cart.cartaoEscolhido.id,
      cart.enderecoEscolhido.id,
      cart.produtos.map((prod) => ({
        produtoId: prod.id,
        quantidade: prod.qtd,
        precoUnit: prod.precoUnit,
      }))
    );
  };

  if (
    !cart ||
    !cart.cartaoEscolhido ||
    !cart.enderecoEscolhido ||
    !cart.produtos ||
    !cart.produtos.length === 0
  ) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <Typography.Title>Confirmar Compra</Typography.Title>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Typography.Subtitle>
            Ops, parece que os dados da compra estão incompletos =(.
          </Typography.Subtitle>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Anchor.GoBack path={routes.ENDERECOS} text="Voltar aos endereços" />

      <div className="d-flex justify-content-center">
        <Typography.Title>Confirmar Compra</Typography.Title>
      </div>

      <div className="d-flex flex-row">
        <Card className="card" style={{ width: "60%" }}>
          <Typography.Subtitle className="m-2 mb-4" bold>
            Produtos
          </Typography.Subtitle>
          {cart.produtos.map((prod) => (
            <div
              className="d-flex flex-row justify-content-between p-2"
              key={prod.id}
            >
              <Info>
                {prod.qtd}x {prod.nome}
              </Info>
              <Value bold>{currencyFormatter(prod.qtd * prod.precoUnit)}</Value>
            </div>
          ))}

          <hr />

          <div className="mt-3 mb-3 d-flex  flex-row justify-content-between">
            <Info>Taxa de Entrega:</Info>
            <Value bold style={{ color: "green" }}>
              Grátis
            </Value>
          </div>

          <hr />

          <div className="mt-3 mb-3 d-flex  flex-row justify-content-between">
            <Info>Cartão:</Info>
            <Value bold style={{ color: "green" }}>
              {cart.cartaoEscolhido?.apelido}
            </Value>
          </div>

          <hr />

          <div className="mt-3 mb-3 d-flex align-items-center flex-row justify-content-between">
            <Info style={{ color: "#2f2f2f" }}>Valor total:</Info>
            <Value bold style={{ fontSize: 32 }}>
              {currencyFormatter(total)}
            </Value>
          </div>
          <Button.Secondary onClick={handleComprar}>
            {isLoading ? (
              <LoadingIcon.Oval stroke="#2f2f2f" />
            ) : (
              "Finalizar Compra"
            )}
          </Button.Secondary>
        </Card>

        <Card className="card" style={{ width: "40%", height: "50%" }}>
          <Typography.Subtitle className="m-2 mb-4" bold>
            Entrega
          </Typography.Subtitle>
          <Info>
            {cart.enderecoEscolhido?.logradouro},{" "}
            {cart.enderecoEscolhido?.bairro} - {cart.enderecoEscolhido?.numero}
          </Info>
          <Info>
            {cart.enderecoEscolhido?.cidade} - {cart.enderecoEscolhido?.uf}
          </Info>
          <Info>CEP: {cart.enderecoEscolhido?.cep}</Info>

          <hr />

          <Value>Previsão de entrega até semana que vem</Value>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
