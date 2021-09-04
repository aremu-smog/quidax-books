import React from "react";
import styled from "styled-components";
import { useReactiveVar } from "@apollo/client";
import { subTotalVar } from "../cache";

const CartSubTotal = () => {
  const subTotal = useReactiveVar(subTotalVar);

  const SubTotalWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 48px;
    margin-bottom: 18px;
  `;

  const SubTotalText = styled.p`
    font-size: 14px;
    margin: 0px;
  `;

  const SubTotalValue = styled.p`
    font-size: 36px;
    margin: 0px;
  `;

  return (
    <SubTotalWrapper>
      <SubTotalText>Subtotal</SubTotalText>

      <SubTotalValue>$ {subTotal.toLocaleString()}</SubTotalValue>
    </SubTotalWrapper>
  );
};

export default CartSubTotal;
