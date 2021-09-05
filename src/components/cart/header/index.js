import React from "react"
import styled from "styled-components"
import { closeCart } from "../../../helpers/cart"
import BackButton from "../../common/button/back"
import { Header } from "../../common/layout/header"

import YourCart from "./your-cart"

const Container = styled.section`
  padding: 0px 30px;
  width: 100%;
`
const CartHeader = () => {
  return (
    <Header>
      <Container>
        <BackButton action={closeCart} />
        <YourCart />
      </Container>
    </Header>
  )
}

CartHeader.propTypes = {}

export default CartHeader
