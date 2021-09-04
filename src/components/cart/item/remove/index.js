import React from "react";
import styled from "styled-components";
import { removeItemFromCart } from "../../cache";

const Button = styled.button`
  padding: 15px 0px;
  text-align: left;
`;
const RemoveFromCart = ({ cartItem }) => {
  return <Button onClick={() => removeItemFromCart(cartItem)}>Remove</Button>;
};

export default RemoveFromCart;
