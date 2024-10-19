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
    cursor: "pointer";
    color: #ffffff;
    transition: 0.2s;
    background: ${props => props.color ? props.color : "#38c1df"};
    box-shadow: ${props => props.disabled ? 'none' : "0 0 1em gray"};
  }
`;

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

  &:hover {
    cursor: pointer;
    background-color: #38c1df;
    color: #ffffff;
    border: none;
    transition: 0.5s;
  }
`;

const Danger = styled.button`
  width: ${props => props.width ? props.width : "100%"};
  height: 50px;
  border-radius: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 133.68%;
  margin: ${props => props.margin ? props.margin : "0px 10px"};
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

const Button = {
    Danger,
    Primary,
    Secondary,
}

export default Button;