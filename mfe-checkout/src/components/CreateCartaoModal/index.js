import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import useCreateCartao from "../../hooks/useCreateCartao";

const CreateCartaoModal = ({ showModal, handleClose }) => {
  const [number, setNumber] = useState("");
  const [apelido, setApelido] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");
  const [titular, setTitular] = useState("");
  const { createCartao, isLoading } = useCreateCartao();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCartao(number, apelido, cvv, titular, validade);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adição de Cartão</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor="apelido">Apelido</label>
          <input
            autoFocus
            type="text"
            id="apelido"
            className="form-control"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />

          <label htmlFor="number">Número</label>
          <input
            autoFocus
            type="text"
            id="number"
            className="form-control"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <label htmlFor="validade">Validade</label>
          <input
            autoFocus
            type="text"
            id="validade"
            className="form-control"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
          />

          <label htmlFor="titular">Titular</label>
          <input
            autoFocus
            type="text"
            id="titular"
            className="form-control"
            value={titular}
            onChange={(e) => setTitular(e.target.value)}
          />

          <label htmlFor="cvv">CVV</label>
          <input
            autoFocus
            type="text"
            id="cvv"
            className="form-control"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />

          <Button.Secondary
            disabled={
              cvv === "" ||
              number === "" ||
              titular === "" ||
              validade === "" ||
              apelido === ""
            }
          >
            {isLoading ? (
              <LoadingIcon.Oval stroke="#2f2f2f" />
            ) : (
              "Criar"
            )}
          </Button.Secondary>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCartaoModal;
