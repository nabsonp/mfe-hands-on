import styled from "styled-components";

const Primary = styled.button`
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "50px"};
  border-radius: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 133.68%;
  margin: ${props => props.margin ? props.margin : "0 10px"};
  color: #ffffff;
  background: ${props => props.color ? props.color : "#38c1df"};
  border: none;
  opacity: ${props => props.disabled ? '0.6' : "1"};

  &:hover {
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    color: #ffffff;
    transition: 0.2s;
    background: ${props => props.color ? props.color : "#38c1df"};
    box-shadow: ${props => props.disabled ? 'none' : "0 0 1em gray"};
  }
`;

export default Primary;