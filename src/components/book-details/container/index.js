import React from "react";
import styled from "styled-components";
import {
  BookTitle,
  BookMeta,
  BookPurchasesLikesAndRating,
  BookAuthors,
} from "../../common/book";
import { Container } from "../../../styles/common";
import BookDetailsSidebar from "../sidebar";
import BackButton from "../../common/button/back";
import { formatDate } from "../../../helpers/date";
import ReactMarkdown from "react-markdown";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
  @media screen and (max-width: 568px) {
    flex-direction: column;
  }
`;

const Details = styled.section`
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: 5%;
  @media screen and (max-width: 568px) {
    margin-left: 0px;
  }
`;

const Overview = styled.section`
  margin-top: 17px;
  padding: 12px 0px;
  border: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-left: none;
  border-right: none;
`;

const FullDescription = styled.section`
  margin-top: 32px;
  line-height: 1.5;
`;

const SubHeading = styled.div`
  margin-top: 36px;
`;

const BookContainer = ({ book }) => {
  return (
    <Container>
      <SubHeading>
        <BackButton url="/" />
      </SubHeading>
      <Section>
        <BookDetailsSidebar
          id={book.id}
          image_url={book.image_url}
          copies={book.available_copies}
          price={book.price}
          available_copies={book.available_copies}
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
            <BookMeta title="Genre" value={book.genres} half_no_mobile />
            <BookMeta title="Tags" value={book.tags} half_no_mobile />
            <BookMeta title="Publisher" value={book.publisher} half_no_mobile />
            <BookMeta
              title="Released"
              value={formatDate(book.published_at)}
              half_no_mobile
            />
          </Overview>
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
