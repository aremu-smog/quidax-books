import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../../../contexts/CartContext";

const Button = styled.button`
  padding: 15px 0px;
  text-align: left;
`;
const RemoveFromCart = ({ book }) => {
  const { removeFromCart } = useCartContext();
  return <Button onClick={() => removeFromCart(book)}>Remove</Button>;
};

export default RemoveFromCart;
