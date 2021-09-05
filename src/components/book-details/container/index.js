import React from "react";
import styled from "styled-components";
import { BookTitle, BookMeta, BookAuthors } from "../../common/book";
import { Container } from "../../../styles/common";
import BookDetailsSidebar from "./sidebar";
import BackButton from "../../common/button/back";
import { formatDate } from "../../../helpers/date";
import ReactMarkdown from "react-markdown";
import { useBookAvailableCopies } from "../../../helpers/book/availableCopies";
import BookDetailsOverview from "./overview";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Details = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 7.5%;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

const FullDescription = styled.section`
  margin-top: 32px;
  line-height: 1.5;
`;

const SubHeading = styled.div`
  margin-top: 36px;
`;

const BookContainer = ({ book }) => {
  const availableCopiesOfBook = useBookAvailableCopies(book);
  return (
    <Container boxed>
      <SubHeading>
        <BackButton url="/" />
      </SubHeading>
      <Section>
        <BookDetailsSidebar
          id={book.id}
          image_url={book.image_url}
          price={book.price}
          available_copies={availableCopiesOfBook}
        />
        <Details>
          <BookTitle name={book.title} large />

          <BookMeta
            title={<BookAuthors authors={book.authors} />}
            value={formatDate(book.published_at, "yearOnly")}
          />

          <BookDetailsOverview book={book} />

          <FullDescription>
            <ReactMarkdown>{book.full_description}</ReactMarkdown>
          </FullDescription>
        </Details>
      </Section>
    </Container>
  );
};

BookContainer.propTypes = {};

export default BookContainer;
