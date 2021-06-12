import React from "react";
import Heading from "../../common/heading";
import styled from "styled-components";
import AllBookItem from "./item";
import { Container } from "../../../styles/common";

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

const AllBooks = ({ books }) => {
  const showBooks = books.map((book) => {
    return <AllBookItem book={book} />;
  });
  return (
    <>
      <Heading text="All Books" />

      <Container>
        <Grid>{showBooks}</Grid>
      </Container>
    </>
  );
};

export default AllBooks;
