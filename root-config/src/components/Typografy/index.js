import styled from "styled-components";

const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  color: #3a3a3a;
`;

const Subtitle = styled.h2`
  font-family: Open Sans;
  font-style: normal;
  font-weight: ${props => props.bold ? '600' : "normal"};
  font-size: 24px;
  line-height: 10px;
  color: ${props => props.color ? props.color : "#3a3a3a"};
`;

const Paragraph = styled.p`
  font-family: Open Sans;
  font-size: ${props => props.fontSize ? props.fontSize : "18px"};
  font-style: normal;
  font-weight:  ${props => props.bold ? '600' : "normal"};
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.color ? props.color : "#3a3a3a"};
`;

const Typography = {
    Title,
    Subtitle,
    Paragraph,
};

export default Typography;
