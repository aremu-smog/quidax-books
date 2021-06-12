import React from "react";
import BookMeta from "../meta";

const BookAuthors = ({ authors = [] }) => {
  return <BookMeta value={authors} />;
};

export default BookAuthors;
