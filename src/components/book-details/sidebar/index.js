import React from "react"
import styled from "styled-components"
import { HideOnMobile } from "../../../styles/common"
import BookCopies from "../../common/book/copies"
import BookPrice from "../../common/book/price"
import BookDetailsAddToCart from "../add-to-cart"

const BookDetailsSidebar = ({ image_url, price, copies, id, available_copies }) => {
  return (
    <Sidebar>
      <Inner>
        <Img src={image_url} />
        <HideOnMobile>
          <BookCopies no_of_copies={available_copies} />
          <BookPrice amount={price} large />
        </HideOnMobile>
        {available_copies > 0 ? (
          <BookDetailsAddToCart copies={available_copies} id={id} price={price} />
        ) : null}
      </Inner>
    </Sidebar>
  )
}

export default BookDetailsSidebar

const Sidebar = styled.section`
  width: 243px;
  flex-shrink: 0;
  height: 100;
  img {
    width: 100%;
  }

  @media screen and (max-width: 568px) {
    width: 100%;
    img {
      width: 133px;
    }
  }
`

const Inner = styled.div`
  position: sticky;
  top: 0;
  @media screen and (max-width: 768px) {
    position: static;
  }
`

const Img = styled.img`
  box-shadow: 0px 30px 30px 0px #00000026;
  margin-bottom: 36px;
`
