import React from "react";
import styled from "styled-components";
import Button from "../../common/button";
import { HideOnPc, HideOnMobile } from "../../../styles/common";
import BookCopies from "../../common/book/copies";
import BookPrice from "../../common/book/price";
import { addItemToCart } from "../../cart/cache";

const AddToCart = styled.div`
  @media screen and (max-width: 568px) {
    position: fixed;
    width: 100%;
    padding: 30px;
    left: 0;
    bottom: 0;
  }
`;

const CartButtonContentMobile = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding-left: 25px;
  font-weight: normal !important;
  font-size: 12px;
  p {
    margin: 0px;
  }
  .text {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 2px;
  }
`;

const BookDetailsAddToCart = ({ copies, price, id }) => {
  return (
    <AddToCart>
      <Button
        action={() => addItemToCart(id, copies, price)}
        text={
          <>
            <HideOnPc display="block">
              <CartButtonContentMobile>
                <div>
                  <p className="text"> Add to Cart</p>
                  <BookCopies no_of_copies={copies} />
                </div>
                <BookPrice amount={price} medium />
              </CartButtonContentMobile>
            </HideOnPc>
            <HideOnMobile>Add to Cart</HideOnMobile>
          </>
        }
      />
    </AddToCart>
  );
};

export default BookDetailsAddToCart;
