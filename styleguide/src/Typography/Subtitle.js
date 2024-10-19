import styled from "styled-components";

const Subtitle = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: ${(props) => (props.bold ? "600" : "normal")};
  font-size: 24px;
  line-height: 10px;
  color: ${(props) => (props.color ? props.color : "#3a3a3a")};
`;

export default Subtitle;
