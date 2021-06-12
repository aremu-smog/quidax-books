import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  @media screen and (max-width: 568px) {
    display: none;
  }
`;
const HideOnMobile = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default HideOnMobile;
