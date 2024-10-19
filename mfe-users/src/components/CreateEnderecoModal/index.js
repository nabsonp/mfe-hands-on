import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import useCreateEndereco from "../../hooks/useCreateEndereco";

const CreateEnderecoModal = ({ showModal, handleClose }) => {
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState(0);
  const [cidade, setCidade] = useState("Manaus");
  const [uf, setUf] = useState("AM");
  const [cep, setCep] = useState("");
  const { isLoading, createEndereco } = useCreateEndereco();

  const handleSubmit = (e) => {
    e.preventDefault();
    createEndereco(logradouro, bairro, numero, cep, uf, cidade);
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adição de Endereço</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor="logradouro">Logradouro</label>
          <input
            autoFocus
            type="text"
            id="logradouro"
            className="form-control"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="bairro">
            Bairro
          </label>
          <input
            id="bairro"
            type="text"
            className="form-control"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="numero">
            Número
          </label>
          <input
            type="number"
            id="number"
            className="form-control"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="cidade">
            Cidade
          </label>
          <input
            type="text"
            id="cidade"
            className="form-control"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="uf">
            UF
          </label>
          <input
            type="text"
            id="uf"
            className="form-control"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="cep">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            className="form-control"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />

          <Button.Secondary
            disabled={
              logradouro === "" ||
              bairro === "" ||
              numero === "" ||
              cep === "" ||
              uf === "" ||
              cidade === ""
            }
          >
            {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Criar"}
          </Button.Secondary>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateEnderecoModal;
