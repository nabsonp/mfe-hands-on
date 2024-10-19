import styled from "styled-components";

const Card = styled.div`
  width: 80%;
  margin: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 13px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    transition: 0.2s;
    box-shadow: 0 0 1em gray;
  }
`;

const ProdutoTitle = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  color: #3a3a3a;
`;

const Info = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #7e7e7e;
`;

const Value = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -0.04em;
  color: #2f2f2f;
`;

const Total = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  letter-spacing: -0.04em;
  color: #2f2f2f;
`;

export {
  Card,
  ProdutoTitle,
  Info,
  Value,
  Total,
};
