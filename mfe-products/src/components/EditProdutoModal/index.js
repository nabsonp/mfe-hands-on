import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Modal } from "react-bootstrap";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import { notification } from "antd";
import useEditProduto from "../../hooks/useEditProduto";

const EditProdutoModal = ({ showModal, handleClose, produto }) => {
  const [nome, setNome] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const { editProduto, data, isLoading, error } = useEditProduto();

  useEffect(() => {
    setNome(produto.nome);
    setDescricao(produto.descricao);
    setPreco(produto.preco);
    setEstoque(produto.estoque);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduto(id, nome, descricao, preco, estoque);
  };

  useEffect(() => {
    if (data) {
      const args = {
        message: "Prontinho =)",
        description: "Produto editado com sucesso.",
        duration: 2,
      };
      notification.success(args);
      navigate(0);
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
        <Modal.Title>Edição de Produto</Modal.Title>
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

          <Button.Secondary
            disabled={preco === "" || estoque === "" || nome === ""}
          >
            {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Salvar"}
          </Button.Secondary>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProdutoModal;
