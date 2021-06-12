import React from "react";
import styled from "styled-components";
import { qbOutlineGray } from "../../../styles/colors";
import { Container } from "../../../styles/common";

const StyledHeading = styled.h3`
  font-size: 14px;
  border-bottom: 1px solid ${qbOutlineGray};
  margin-top: 27px;
  padding-bottom: 14px;
`;

const Heading = ({ text }) => {
  return (
    <Container>
      <StyledHeading>{text}</StyledHeading>
    </Container>
  );
};

export default Heading;
