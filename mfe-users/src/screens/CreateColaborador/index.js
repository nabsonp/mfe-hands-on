import React, { useEffect, useState } from "react";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import useCreateUser from "../../hooks/useCreateUser";
import { CreateUserContainer } from "../../components/CreateUserContainer";

const CreateColaborador = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const { createUser, isLoading, error } = useCreateUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha.length < 6) {
      setSenhaError("A senha deve possuir pelo menos 6 caracteres.");
      return;
    }

    if (senha !== senhaConfirm) {
      setSenhaError("Senhas não conferem.");
      return;
    }
    setSenhaError("");

    createUser(nome, email, senha, 2);
  };

  useEffect(() => {
    if (
      error &&
      error.response?.status === 400 &&
      error.response?.data?.errors[0].message ===
        "Usuarios.email must be unique"
    ) {
      setEmailError("Este e-mail já está cadastrado.");
    }
  }, [error]);

  return (
    <CreateUserContainer className="container">
      <div className="d-flex justify-content-center">
        <h1>Adição de Colaborador</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="mt-3 mb-1" htmlFor="nome">
          Nome Completo
        </label>
        <input
          autoFocus
          type="text"
          id="nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className="mt-3 mb-1" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className={
            emailError === "" ? "form-control" : "form-control is-invalid"
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="invalid-feedback">{emailError}</div>

        <label className="mt-3 mb-1" htmlFor="senha">
          Senha
        </label>
        <input
          type="password"
          id="senha"
          className={
            senhaError === "" ? "form-control" : "form-control is-invalid"
          }
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <label className="mt-3 mb-1" htmlFor="confirmSenha">
          Confirme a senha
        </label>
        <input
          type="password"
          id="confirmSenha"
          className={
            senhaError === "" ? "form-control" : "form-control is-invalid"
          }
          value={senhaConfirm}
          onChange={(e) => setSenhaConfirm(e.target.value)}
        />
        <div className="invalid-feedback">{senhaError}</div>

        <Button.Secondary
          disabled={
            nome === "" || email === "" || senha === "" || senhaConfirm == ""
          }
        >
          {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Criar"}
        </Button.Secondary>
      </form>
    </CreateUserContainer>
  );
};

export default CreateColaborador;
