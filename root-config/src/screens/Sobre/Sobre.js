import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Subtitle, Text, Title } from "./styles";
import { routes } from "@nabstore/utils";

const Sobre = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Title>Bem vindo,</Title>
      <Subtitle>esta é a minha loja e eu que fiz!</Subtitle>

      <Text>
        Aqui você vai encontrar os melhores produtos, com os melhores preços.
        Através de um simples controle de estoque, podemos levar o que você mais
        quer com conforto e praticidade.
      </Text>

      <Button.Primary width="480px" margin="80px 0" onClick={() => navigate(routes.HOME)}>
        Ver Produtos
      </Button.Primary>
    </div>
  );
};

export default Sobre;
