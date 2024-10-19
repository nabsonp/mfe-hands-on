import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "@nabstore/styleguide";

const Title = styled(Typography.Title)`
  font-size: 48px !important;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  font-family: Open Sans;
  font-style: normal;
  font-size: 18px;
  border: 2px solid #b4b4b4;
  box-sizing: border-box;
  border-radius: 8px;
  height: 48px;
  margin: 10px 0 25px 0;
`;

const Label = styled.label`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 10px;
`;

const Line = styled.hr`
  margin: 0 0 75px 0;
`;

const SignUpLink = styled(Link)`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #212223;
  width: 100%;
  text-align: center;
`;

export { Title, Input, Label, Line, SignUpLink };
