import React from "react";
import styled from "styled-components";
import BookGridItem from "./item";

const BookGrid = ({ books }) => {
  const showBooks = books.map((book) => {
    return <BookGridItem book={book} key={book.id} />;
  });

  const Grid = styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 50px;
    margin-top: 24px;

    @media screen and (max-width: 1080px) {
      grid-template-columns: auto auto;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: auto;
    }
  `;

  return <Grid>{showBooks}</Grid>;
};

export default BookGrid;
