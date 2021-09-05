import React from "react";
import { BookTitle, BookMeta, BookAuthors } from "../../../common/book";
import { formatDate } from "../../../../helpers/date";

const BookDetailsHeader = ({ title, authors, published_at }) => {
  return (
    <>
      <BookTitle name={title} large />

      <BookMeta
        title={<BookAuthors authors={authors} />}
        value={formatDate(published_at, "yearOnly")}
      />
    </>
  );
};

export default BookDetailsHeader;
