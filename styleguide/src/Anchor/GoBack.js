import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@reach/router";
import styled from "styled-components";

const StyledGoBackLink = styled(Link)`
  font-family: Open Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: #212223;
`;

const GoBack = ({ text, path }) => (
  <StyledGoBackLink to={path}>
    <FontAwesomeIcon icon={faArrowLeft} /> {text}
  </StyledGoBackLink>
);

export default GoBack;
