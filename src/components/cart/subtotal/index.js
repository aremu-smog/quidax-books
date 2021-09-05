import React from "react"
import styled from "styled-components"

import { useCartSubtotal } from "../../../helpers/cart/getSubtotal"

const CartSubTotal = () => {
  const subTotal = useCartSubtotal()

  const SubTotalWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 48px;
    margin-bottom: 18px;
  `

  const SubTotalText = styled.p`
    font-size: 14px;
    margin: 0px;
  `

  const SubTotalValue = styled.p`
    font-size: 36px;
    margin: 0px;
  `

  return (
    <SubTotalWrapper>
      <SubTotalText>Subtotal</SubTotalText>

      <SubTotalValue>$ {subTotal.toLocaleString()}</SubTotalValue>
    </SubTotalWrapper>
  )
}

export default CartSubTotal
