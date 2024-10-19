import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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

const Primary = styled(Link)`
  color: #2b9bb4;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
`;

const Anchor = { GoBack, Primary };

export default Anchor;
