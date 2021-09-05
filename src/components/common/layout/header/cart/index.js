import React from "react"
import styled from "styled-components"
import { qbGreen } from "../../../../../styles/colors"
import { CartIcon } from "../../../../../icons"
// import { cartItemsVar, openCart } from "../../../../cart/cache";
import { useReactiveVar } from "@apollo/client"
import { cartVar, openCart } from "../../../../../helpers/cart"

const Button = styled.button`
  position: relative;
  background-color: transparent;
  margin-left: 25px;
  margin-right: 0px;

  @media screen and (max-width: 568px) {
    margin-left: 10px;
  }
`
const Counter = styled.span`
  display: block;
  position: absolute;
  top: -8px;
  right: -2px;
  min-width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  line-height: 1.65;
  background-color: ${qbGreen};
`
const CartButton = () => {
  const { items: cartItems } = useReactiveVar(cartVar)
  // const cartItems = useReactiveVar(cartItemsVar);
  return (
    <Button onClick={() => openCart()}>
      <Counter>{cartItems.length}</Counter>
      <CartIcon />
    </Button>
  )
}

export default CartButton
