import React from "react";
import Heading from "../../common/heading";
import FeaturedBooksSlider from "./slider";

const FeaturedBooks = ({ books }) => {
  const featured_books = books.filter((book) => book.featured);
  return (
    <>
      <Heading text="Featured Books" />
      <FeaturedBooksSlider books={featured_books} />
    </>
  );
};

export default FeaturedBooks;
