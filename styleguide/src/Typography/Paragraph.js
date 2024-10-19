import styled from "styled-components";

const Paragraph = styled.p`
  font-family: Open Sans;
  font-size: ${props => props.fontSize ? props.fontSize : "18px"};
  font-style: normal;
  font-weight:  ${props => props.bold ? '600' : "normal"};
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.color ? props.color : "#3a3a3a"};
`;

export default Paragraph;
