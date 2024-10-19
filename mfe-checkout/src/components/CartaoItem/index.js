import React from "react";
import { Data, Label, CardTitle, Card } from "./styles";

const CartaoItem = ({ cartao, handleSelect }) => {
  return (
    <Card
      key={cartao.id}
      className="card"
      onClick={() => handleSelect(cartao)}
      style={{ cursor: "pointer" }}
    >
      <CardTitle>{cartao.apelido}</CardTitle>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column">
          <Data>
            <Label>Número:</Label> {cartao.number}
          </Data>
        </div>
        <div className="d-flex flex-column">
          <Data>
            <Label>Validade:</Label> {cartao.validade}
          </Data>
        </div>
      </div>
    </Card>
  );
};

export default CartaoItem;
