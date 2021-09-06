import React from "react"
import styled from "styled-components"
import { Container } from "../../../styles/common"
import BookDetailsSidebar from "./sidebar"
import BackButton from "../../common/button/back"
import { useBookAvailableCopies } from "../../../helpers/book/availableCopies"
import BookDetailsOverview from "./overview"
import BookDetailsFullDescription from "./full-description"
import BookDetailsHeader from "./header"

const BookContainer = ({ book }) => {
  const availableCopiesOfBook = useBookAvailableCopies(book)
  return (
    <Container>
      <SubHeading>
        <BackButton url='/' />
      </SubHeading>
      <Section>
        <BookDetailsSidebar
          id={book.id}
          image_url={book.image_url}
          copies={book.available_copies}
          price={book.price}
          available_copies={availableCopiesOfBook}
        />
        <Details>
          <BookDetailsHeader
            title={book.title}
            published_at={book.published_at}
            authors={book.authors}
          />

          <BookDetailsOverview book={book} />

          <BookDetailsFullDescription content={book.full_description} />
        </Details>
      </Section>
    </Container>
  )
}

export default BookContainer

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const Details = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 7.5%;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`

const SubHeading = styled.div`
  margin-top: 36px;
`
