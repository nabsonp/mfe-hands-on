import React, { useState } from "react";
import { Button, LoadingIcon } from "@nabstore/styleguide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Input, Title, Label, Line, SignUpLink } from "./styles";
import { routes } from "@nabstore/utils";
import Container from "../../components/Container";
import useLogin from "../../hooks/useLogin";

const Login = ({ loginAction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin(loginAction);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container className="container">
      <Title>Login</Title>

      <Line />

      <form onSubmit={handleSubmit}>
        <div className="ms-3">
          <FontAwesomeIcon icon={faUser} />
          <Label htmlFor="email">E-mail</Label>
        </div>
        <Input
          autoFocus
          type="email"
          id="email"
          className={error ? "form-control is-invalid" : "form-control"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="ms-3">
          <FontAwesomeIcon icon={faKey} />
          <Label htmlFor="password">Senha</Label>
        </div>

        <Input
          type="password"
          id="password"
          className={error ? "form-control is-invalid" : "form-control"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="invalid-feedback">E-mail e/ou senha inválido(s).</div>

        <Button.Secondary
          margin="50px 0"
          disabled={password === "" || email === ""}
        >
          {isLoading ? <LoadingIcon.Oval stroke="#2f2f2f" /> : "Entrar"}
        </Button.Secondary>

        <div className="d-flex justify-content-center">
          <SignUpLink to={routes.SIGNUP}>
            Não possuo uma conta <FontAwesomeIcon icon={faArrowRight} />
          </SignUpLink>
        </div>
      </form>
    </Container>
  );
};

export default Login;
