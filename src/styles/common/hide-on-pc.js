import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: none;
  @media screen and (max-width: 568px) {
    display: ${(props) => props.display};
  }
`;
const HideOnPc = ({ children, display = "block" }) => {
  return <StyledDiv display={display}>{children}</StyledDiv>;
};

export default HideOnPc;
