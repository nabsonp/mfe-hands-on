import React from "react";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import { defaultImages } from "@nabstore/utils";
import { ProdutosContainer, NoProdutosText } from "./styles";
import { routes } from "@nabstore/utils";
import productsMethods from "../../services/products";
import Card from "../Card";
import useGetProducts from "../../hooks/useGetProducts";

const ProdutosList = () => {
  const {
    changeProductsPage,
    data: produtos,
    page,
    isLoading,
    error,
  } = useGetProducts();

  const handleChangePage = (increment) => {
    changeProductsPage(increment);
  };

  if (error) {
    return (
      <div className="d-flex flex-column align-items-center">
        <Typography.Subtitle>Erro ao carregar produtos.</Typography.Subtitle>
      </div>
    );
  }

  if (isLoading || !produtos) {
    return (
      <div className="d-flex flex-column align-items-center">
        <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
      </div>
    );
  }

  if (produtos.length === 0) {
    return <NoProdutosText>Nenhum produto listado.</NoProdutosText>;
  }

  return (
    <div>
      <ProdutosContainer className="d-flex flex-wrap mt-3">
        {produtos.map((produto) => (
          <Card className="card" key={produto.id}>
            <img
              src={produto.image}
              className="card-img-top"
              onError={(e) => (e.target.src = defaultImages.NO_IMAGE_URL)}
              alt={produto.nome}
            />
            <div className="card-body">
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">
                {produto.descricao?.length > 75
                  ? `${produto.descricao.slice(0, 75)}...`
                  : produto.descricao}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-center">
                <Anchor.Primary to={routes.PRODUTO.replace(":id", produto.id)}>
                  Ver detalhes
                </Anchor.Primary>
              </li>
            </ul>
          </Card>
        ))}
      </ProdutosContainer>

      <div className="mt-5 mb-5 d-flex flex-row justify-content-center align-items-center">
        <Button.Primary
          margin="0 25px"
          width="150px"
          onClick={() => handleChangePage(-1)}
          disabled={page <= 1}
        >
          Anterior
        </Button.Primary>
        {page}
        <Button.Primary
          margin="0 25px"
          width="150px"
          onClick={() => handleChangePage(1)}
          disabled={produtos && produtos.length < 10}
        >
          Próxima
        </Button.Primary>
      </div>
    </div>
  );
};

export default ProdutosList;
