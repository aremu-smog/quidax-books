import React from "react";
import Heading from "../../common/heading";
import { Container } from "../../../styles/common";
import BookGrid from "../../common/book/grid";

const AllBooks = ({ books }) => {
  return (
    <>
      <Heading text="All Books" />
      <Container>
        <BookGrid books={books} />
      </Container>
    </>
  );
};

export default AllBooks;
