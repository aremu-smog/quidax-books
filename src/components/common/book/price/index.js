import React from "react";
import styled from "styled-components";

const Price = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: ${(props) =>
    props.isLarge ? "36px" : props.isMedium ? "28px" : "inherit"};
`;
const BookPrice = ({ amount, large, medium }) => {
  return (
    <Price isLarge={large} isMedium={medium}>
      ${amount.toLocaleString("en")}
    </Price>
  );
};

export default BookPrice;
