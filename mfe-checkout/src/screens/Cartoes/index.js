import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { routes } from "@nabstore/utils";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import useGetCartoes from "../../hooks/useGetCartoes";
import CartaoItem from "../../components/CartaoItem";
import CreateCartaoModal from "../../components/CreateCartaoModal";

const Cartoes = ({ selectCartAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: cartoes, isLoading, error } = useGetCartoes();
  const [isCreateCartaoModalOpen, setIsCreateCartaoModalOpen] = useState(false);

  const handleSelect = (cartao) => {
    dispatch(selectCartAction(cartao));
    navigate(routes.ENDERECOS);
  };

  const CartoesList = () => {
    if (isLoading || !cartoes) {
      return (
        <div className="d-flex flex-column align-items-center">
          <LoadingIcon.Oval className="mt-5" stroke="#2f2f2f" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>Erro ao carregar cartões.</Typography.Subtitle>
        </div>
      );
    }

    if (cartoes.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>Você ainda não tem cartões cadastrados.</Typography.Subtitle>
        </div>
      );
    }

    return (
      <div className="d-flex flex-column align-items-center mb-5">
        {cartoes.map((cartao) => (
          <CartaoItem
            key={cartao.id}
            cartao={cartao}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container pb-5">
      <CreateCartaoModal
        handleClose={() => setIsCreateCartaoModalOpen(false)}
        showModal={isCreateCartaoModalOpen}
      />

      <Anchor.GoBack path={routes.CART} text="Voltar ao carrinho" />

      <div className="float-end">
        <Button.Primary onClick={() => setIsCreateCartaoModalOpen(true)}>
          <FontAwesomeIcon className="me-2" icon={faPlusCircle} /> Novo Cartão
        </Button.Primary>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Typography.Title>Cartões</Typography.Title>
      </div>

      <CartoesList />

    </div>
  );
};

export default Cartoes;
