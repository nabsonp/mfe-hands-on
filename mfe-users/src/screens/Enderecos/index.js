import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Anchor, Button, LoadingIcon, Typography } from "@nabstore/styleguide";
import { routes } from "@nabstore/utils";
import CreateEnderecoModal from "../../components/CreateEnderecoModal";
import useGetEnderecos from "../../hooks/useGetEnderecos";
import EnderecoCard from "../../components/EnderecoCard";

const Enderecos = ({ selectEnderecoAction }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: enderecos, isLoading, error } = useGetEnderecos();
  const [isCreateEnderecoModalOpen, setIsCreateEnderecoModalOpen] =
    useState(false);

  const handleSelect = (endereco) => {
    dispatch(selectEnderecoAction(endereco));
    navigate(routes.CHECKOUT);
  };

  if (isLoading) {
    return (
      <div className="container pb-5">
        <Anchor.GoBack path={routes.CARDS} text="Voltar aos cartões" />

        <div className="d-flex justify-content-center mt-4">
          <Typography.Title>Endereços</Typography.Title>
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
          <LoadingIcon.Oval stroke="#2f2f2f" />
        </div>
      </div>
    );
  }

  const EnderecosList = () => {
    if (isLoading || !enderecos) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <LoadingIcon.Oval stroke="#2f2f2f" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>Erro ao carregar endereços.</Typography.Subtitle>
        </div>
      );
    }

    if (enderecos.length === 0) {
      return (
        <div className="d-flex flex-column align-items-center mt-5">
          <Typography.Subtitle>
            Você ainda não possui endereços cadastrados.
          </Typography.Subtitle>
        </div>
      );
    }

    return (
      <div className="d-flex flex-column align-items-center mb-5">
        {enderecos.map((endereco) => (
          <EnderecoCard
            key={endereco.id}
            endereco={endereco}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container pb-5">
      <CreateEnderecoModal
        handleClose={() => setIsCreateEnderecoModalOpen(false)}
        showModal={isCreateEnderecoModalOpen}
      />

      <Anchor.GoBack path={routes.CARDS} text="Voltar aos cartões" />

      <div className="float-end">
        <Button.Primary onClick={() => setIsCreateEnderecoModalOpen(true)}>
          <FontAwesomeIcon className="me-2" icon={faPlusCircle} /> Novo Endereço
        </Button.Primary>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Typography.Title>Endereços</Typography.Title>
      </div>

      <EnderecosList />
    </div>
  );
};

export default Enderecos;
