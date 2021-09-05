import React from "react";
import Layout from "../components/common/layout";
import { useQuery, useReactiveVar } from "@apollo/client";
import { searchVar } from "../helpers/search";
import Heading from "../components/common/heading";
import { GET_ALL_BOOKS } from "../queries/getAllBooks";
import BookGrid from "../components/common/book/grid";
import { Container } from "../styles/common";

import { getSearchResults } from "../helpers/search/getResults";

const SearchPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS);
  const { value: searchValue, inProgress } = useReactiveVar(searchVar);

  if (error) {
    return "Bad things happen to good people. Kindly check your internet and refresh";
  }
  if (loading) {
    return "Loading...";
  }
  const books = data.books;

  const searchResults = getSearchResults(books, searchValue);

  const noOfResults = searchResults.length;
  const headingText =
    searchValue === "" ? (
      "How nice would it be if we could get results without searching? "
    ) : (
      <>
        <b>{noOfResults}</b> results found for `<b>{searchValue}</b>`
      </>
    );
  return (
    <Layout>
      {inProgress && <Heading text={headingText} />}

      <Container>
        <BookGrid books={searchResults} />
      </Container>
    </Layout>
  );
};

export default SearchPage;
