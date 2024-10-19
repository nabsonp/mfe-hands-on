import React from "react";
import { Data, Label, CardTitle, Card } from "./styles";

const EnderecoCard = ({ endereco, handleSelect }) => {
    console.log("end", endereco)
  return (
    <Card
      key={endereco.id}
      className="card"
      onClick={() => handleSelect(endereco)}
      style={{ cursor: "pointer" }}
    >
      <CardTitle>Endereço {endereco.id}</CardTitle>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column">
          <Data>
            <Label>Logradouro:</Label> {endereco.logradouro}
          </Data>
          <Data>
            <Label>Bairro:</Label> {endereco.bairro}
          </Data>
          <Data>
            <Label>Numero:</Label> {endereco.numero}
          </Data>
        </div>
        <div className="d-flex flex-column">
          <Data>
            <Label>Cidade:</Label> {endereco.cidade}
          </Data>
          <Data>
            <Label>UF:</Label> {endereco.uf}
          </Data>
          <Data>
            <Label>CEP:</Label> {endereco.cep}
          </Data>
        </div>
      </div>
    </Card>
  );
};

export default EnderecoCard;
