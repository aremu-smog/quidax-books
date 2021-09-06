import React from "react"
import Cart from "../../cart"
import styled from "styled-components"

import MainHeader from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Cart />
      <MainHeader />

      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  margin-bottom: 100px;
`
