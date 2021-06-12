import { useQuery, gql } from "@apollo/client";
import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../contexts/CartContext";
import Button from "../common/button";
import CartHeader from "./header";
import CartItem from "./item";

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
  transform: ${(props) =>
    props.isOpen ? "translateX(0%)" : "translateX(100%)"};
`;

const CartItems = styled.section`
  padding: 30px;
`;

const CartContainer = styled.section`
  max-width: 400px;
  width: 100%;
  background: white;
  height: 100%;
  overflow-y: auto;
`;

export const GET_CART = gql`
  query GetCartItems {
    cartItems @client
    cartContainer @client
  }
`;

const Cart = () => {
  const { loading, error, data } = useQuery(GET_CART);
  // const { cartItems, cartIsOpen } = useCartContext();

  return (
    <Wrapper isOpen={data.cartContainer[0].isOpen}>
      <CartContainer>
        <CartHeader />
        <CartItems>
          {loading
            ? "Loading"
            : error
            ? "Error.."
            : data.cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
          {/* {booksInCart} */}
          <Button text="Proceed to Checkout" />
        </CartItems>
      </CartContainer>
    </Wrapper>
  );
};

export default Cart;
