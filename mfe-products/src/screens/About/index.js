import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nabstore/styleguide";
import { routes } from "@nabstore/utils";
import { Title, Subtitle, Text } from "./styles";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title>Bem vindo à Nabstore,</Title>
      <Subtitle>uma loja feita com Micro Frontends!</Subtitle>

      <Text>
        Essa loja foi inicialmente desenvolvida como um monolito e então foi
        quebrada em três micro-frontends: mfe-users, mfe-products e
        mfe-checkout. Você pode identidicar qual MFE está acessando olhando o
        prefixo da URL de cada página.
      </Text>

      <Button.Primary
        width="480px"
        margin="80px 0"
        onClick={() => navigate(routes.HOME)}
      >
        Ver Produtos
      </Button.Primary>
    </div>
  );
};

export default About;
