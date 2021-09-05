import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Button from "../common/button"
import CartHeader from "./header"
import CartItem from "./item"
import { useReactiveVar } from "@apollo/client"
import CartSubTotal from "./subtotal"
import { cartVar, closeCart } from "../../helpers/cart"

const Cart = () => {
  const { isOpen: cartIsOpen, items: cartItems } = useReactiveVar(cartVar)

  const cartArea = useRef()
  useEffect(() => {
    const handleClickOutside = e => {
      if (cartArea.current && !cartArea.current.contains(e.target)) {
        cartIsOpen && closeCart()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [cartIsOpen])

  return (
    <Wrapper isOpen={cartIsOpen}>
      <CartContainer ref={cartArea}>
        <CartHeader />
        <CartItems>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <CartSubTotal />
          <Button text='Proceed to Checkout' />
        </CartItems>
      </CartContainer>
    </Wrapper>
  )
}

export default Cart

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  right: 0;
  z-index: 500;
  display: flex;
  justify-content: flex-end;
  transition: transform 0.3s ease-in-out;
  transform: ${props => (props.isOpen ? "translateX(0%)" : "translateX(100%)")};
`

const CartItems = styled.section`
  padding: 30px;
`

const CartContainer = styled.section`
  max-width: 400px;
  width: 100%;
  background: white;
  height: 100%;
  overflow-y: auto;
`
