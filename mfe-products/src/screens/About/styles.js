import styled from "styled-components";
import { Typography } from "@nabstore/styleguide";

const Title = styled(Typography.Title)`
  font-size: 96px !important;
  font-weight: 800 !important;
  line-height: 128px !important;
`;

const Subtitle = styled(Typography.Subtitle)`
  font-size: 89px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 119px !important;
  letter-spacing: -0.04em !important;
  text-align: left !important;
  color: #585757 !important;
`;

const Text = styled(Typography.Paragraph)`
  font-size: 24px !important;
  font-style: normal !important;
  font-weight: 600 !important;
  line-height: 32px !important;
  letter-spacing: -0.04em !important;
  text-align: left !important;
  color: #585757 !important;
`;

export { Subtitle, Text, Title };
