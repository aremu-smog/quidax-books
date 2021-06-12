import React, { useContext, useState } from "react";

const BooksContext = React.createContext();

export const useBooksContext = () => useContext(BooksContext);

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const setTheBooks = (books) => setBooks([...books]);
  const value = {
    books: books,
    setBooks: setTheBooks,
  };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
