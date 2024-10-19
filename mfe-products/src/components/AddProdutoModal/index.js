import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "react-bootstrap";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import { routes } from "@nabstore/utils";
import useCreateProduto from "../../hooks/useCreateProduto";

const AddProdutoModal = ({ showModal, handleClose }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const { createProduto, data, isLoading, error } = useCreateProduto();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("preco", preco);
    formData.append("estoque", estoque);
    formData.append("imagem", selectedFile, selectedFile.name);

    createProduto(formData);
  };

  useEffect(() => {
    if (data) {
      navigate(routes.PRODUTO.replace(":id", data.id));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error.status === 400) {
        setNomeError(error.data?.errors[0].message);
      } else {
        console.error("Erro ao criar produto", error);
      }
    }
  }, [error]);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Adição de Produto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="m-3">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input
            autoFocus
            type="text"
            id="nome"
            className={
              nomeError === "" ? "form-control" : "form-control is-invalid"
            }
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <div className="invalid-feedback">{nomeError}</div>

          <label className="mt-3 mb-1" htmlFor="descricao">
            Descrição
          </label>
          <textarea
            id="descricao"
            className="form-control"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="preco">
            Preço
          </label>
          <input
            type="number"
            id="preco"
            className="form-control"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="estoque">
            Estoque
          </label>
          <input
            type="number"
            id="estoque"
            className="form-control"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
          />

          <label className="mt-3 mb-1" htmlFor="imagem">
            Imagem
          </label>
          <input
            type="file"
            id="imagem"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />

          <Button.Secondary
            disabled={nome === "" || descricao === "" || !selectedFile}
          >
            {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Criar"}
          </Button.Secondary>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProdutoModal;
