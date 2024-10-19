import styled from "styled-components";

const Danger = styled.button`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 50px;
  border-radius: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 133.68%;
  margin: ${(props) => (props.margin ? props.margin : "0px 10px")};
  color: #d95b5b;
  background: #ffffff;
  border: 2px solid #d95b5b;

  &:hover {
    cursor: pointer;
    background-color: #d95b5b;
    color: #ffffff;
    border: none;
    transition: 0.5s;
  }
`;

export default Danger;
