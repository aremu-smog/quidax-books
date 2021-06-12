import React, { useState } from "react";
import styled from "styled-components";
import { BrandIcon, SearchIcon } from "../../../../icons";
import { Container, HideOnPc } from "../../../../styles/common";
import CartButton from "./cart";
import QuidaxBookLogo from "./logo";
import Search from "./search";

export const Header = styled.header`
  height: 100px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 568px) {
    height: 70px;
  }
`;
const MainHeader = () => {
  return (
    <Header>
      <Container>
        <QuidaxBookLogo />

        <Search />

        <div className="flex flex-vertical-center">
          <BrandIcon />
          <CartButton />
        </div>
      </Container>
    </Header>
  );
};

export default MainHeader;
