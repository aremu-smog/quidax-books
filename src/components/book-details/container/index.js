import React from "react"
import styled from "styled-components"
import { BookTitle, BookMeta, BookPurchasesLikesAndRating, BookAuthors } from "../../common/book"
import { Container } from "../../../styles/common"
import BookDetailsSidebar from "../sidebar"
import BackButton from "../../common/button/back"
import { formatDate } from "../../../helpers/date"
import ReactMarkdown from "react-markdown"
import { useBookAvailableCopies } from "../../../helpers/book/availableCopies"

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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

const FullDescription = styled.section`
  margin-top: 32px;
  line-height: 1.5;
`

const SubHeading = styled.div`
  margin-top: 36px;
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

const BookContainer = ({ book }) => {
  const availableCopiesOfBook = useBookAvailableCopies(book)
  return (
    <Container boxed>
      <SubHeading>
        <BackButton url='/' />
      </SubHeading>
      <Section>
        <BookDetailsSidebar
          id={book.id}
          image_url={book.image_url}
          // copies={book.available_copies}
          price={book.price}
          available_copies={availableCopiesOfBook}
        />
        <Details>
          <BookTitle name={book.title} large />

          <BookMeta
            title={<BookAuthors authors={book.authors} />}
            value={formatDate(book.published_at, "yearOnly")}
          />

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
          <FullDescription>
            <ReactMarkdown>{book.full_description}</ReactMarkdown>
          </FullDescription>
        </Details>
      </Section>
    </Container>
  )
}

BookContainer.propTypes = {}

export default BookContainer
