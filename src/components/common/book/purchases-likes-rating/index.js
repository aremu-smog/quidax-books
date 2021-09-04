import React from "react"
import styled from "styled-components"
import BookMeta from "../meta"
import BookRating from "../rating"
import BookPurchasesIcon from "./icons/purchases"
import BookLikesIcon from "./icons/likes"

const Div = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const PurchasesAndLikes = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${props => (props.isLight ? "white" : "#eeeeee")};
  padding-right: 8px;
  margin-right: 12px;
`

const BookPurchasesLikesAndRating = ({ no_of_purchases, no_of_likes, rating, light }) => {
  return (
    <Div>
      <PurchasesAndLikes isLight={light}>
        <BookMeta title={<BookPurchasesIcon light={light} />} value={no_of_purchases} center />
        <BookMeta title={<BookLikesIcon light={light} />} value={no_of_likes} center />
      </PurchasesAndLikes>
      <BookRating no={rating} />
    </Div>
  )
}

export default BookPurchasesLikesAndRating
