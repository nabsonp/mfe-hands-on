import styled from "styled-components";

const Secondary = styled.button`
  width: ${props => props.width ? props.width : "100%"};
  height: 50px;
  border-radius: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 133.68%;
  margin:  ${props => props.margin ? props.margin : "30px 0 0 0"};
  color: #38c1df;
  background: #ffffff;
  border: 2px solid #38c1df;
  opacity: ${props => props.disabled ? '0.6' : "1"};

  &:hover {
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    background-color: ${props => props.disabled ? "#ffffff" : "#38c1df"};
    color: ${props => props.disabled ? "#38c1df" : "#ffffff"};
    border: ${props => props.disabled ? "2px solid #38c1df" : "none"};
    transition: 0.5s;
  }
`;

export default Secondary;