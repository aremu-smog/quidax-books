import React from "react";
import styled from "styled-components";
import { qbGreen } from "../../../../../styles/colors";
import { CartIcon } from "../../../../../icons";
import { openCart } from "../../../../cart/cache";

const Button = styled.button`
  position: relative;
  background-color: transparent;
  margin-left: 25px;
  margin-right: 0px;

  @media screen and (max-width: 568px) {
    margin-left: 10px;
  }
`;
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
`;
const CartButton = () => {
  return (
    <Button onClick={openCart}>
      <Counter>{0}</Counter>
      <CartIcon />
    </Button>
  );
};

export default CartButton;
