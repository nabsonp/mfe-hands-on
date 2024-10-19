import React from "react";
import { currencyFormatter, defaultImages } from "@nabstore/utils";
import { ProductImageFragment } from "@nabstore/mfe-products";
import { Button } from "@nabstore/styleguide";
import { ProdutoTitle, Info, Value } from "./styles";
import Card from "../Card";
import { useDispatch } from "react-redux";

const CartProduct = ({ produto, removeProductFromCartAction }) => {
  const dispatch = useDispatch();

  return (
    <Card className="card" key={produto.id}>
      <div className="d-flex flex-row  justify-content-around">
        <div className="d-flex justify-content-center">
          <ProductImageFragment
            produtoId={produto.id}
            onError={(e) => (e.target.src = defaultImages.NO_IMAGE_URL)}
            className="img-thumbnail"
            alt={produto.nome}
            width="300px"
          />
        </div>

        <div>
          <div className="card-body">
            <ProdutoTitle className="card-title">{produto.nome}</ProdutoTitle>
            <Info>ID: {produto.id}</Info>
            <Info className="mt-4">
              Quantidade: <Value>{produto.qtd}</Value>
            </Info>
            <Info>
              Preço Unitário:{" "}
              <Value>{currencyFormatter(produto.precoUnit)}</Value>
            </Info>
            <Info className="mt-5">
              Total:{" "}
              <Value>
                {currencyFormatter(produto.qtd * produto.precoUnit)}
              </Value>
            </Info>
          </div>
        </div>

        <div className="d-flex">
          <Button.Danger
            className="align-self-center"
            onClick={() =>
              dispatch(removeProductFromCartAction({ id: produto.id }))
            }
          >
            Remover
          </Button.Danger>
        </div>
      </div>
    </Card>
  );
};

export default CartProduct;
