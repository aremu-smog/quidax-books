import React from "react";
import styled from "styled-components";
import {
  BookAuthors,
  BookCopies,
  BookMeta,
  BookTitle,
  BookPurchasesLikesAndRating,
} from "../../../../common/book/";

const Div = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.9),
    rgb(0, 0, 0)
  );
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 20px 19px 27px 30px;
  transition: opacity 0.3s ease-in-out;
  color: white;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  :hover {
    opacity: 1;
  }

  footer {
  }
`;

const Group = styled.div`
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  h3 {
    margin-top: 0px;
    margin-bottom: 4px;
    font-weight: bold;
  }
`;

const FeaturedBookItemInfo = ({ book }) => {
  return (
    <Div>
      <BookCopies no_of_copies={book.available_copies} featured />

      <Group>
        <BookTitle name={book.title} featured />
        <BookAuthors authors={book.authors} />
      </Group>

      <BookMeta title="Genre" value={book.genres} featured />
      <BookMeta title="Tags" value={book.tags} featured />

      <BookPurchasesLikesAndRating
        no_of_purchases={book.number_of_purchases}
        no_of_likes={book.likes}
        rating={book.rating}
        light
      />
    </Div>
  );
};

export default FeaturedBookItemInfo;
