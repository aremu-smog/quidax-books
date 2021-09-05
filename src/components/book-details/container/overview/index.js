import React from "react"
import styled from "styled-components"
import { BookMeta, BookPurchasesLikesAndRating } from "../../../common/book"
import { formatDate } from "../../../../helpers/date"

const BookDetailsOverview = ({ book }) => {
  return (
    <Overview>
      <BookPurchasesLikesAndRating
        no_of_likes={book.likes}
        no_of_purchases={book.number_of_purchases}
        rating={3.4}
      />

      <BookMetaWrapper>
        <BookMeta title='Genre' value={book.genres} />
        <BookMeta title='Tags' value={book.tags} />
        <BookMeta title='Publisher' value={book.publisher} />
        <BookMeta title='Released' value={formatDate(book.published_at)} />
      </BookMetaWrapper>
    </Overview>
  )
}

export default BookDetailsOverview

const Overview = styled.section`
  margin-top: 17px;
  padding: 12px 0px;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;

  align-items: flex-start;
  border-left: none;
  border-right: none;
`

const BookMetaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 32px;
  grid-gap: 16px;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: none;
  }
`
