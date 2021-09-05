import { useQuery } from "@apollo/client";
import React from "react";
import BookContainer from "../components/book-details/container";
import { GET_BOOK } from "../queries/getBook";

import Layout from "../components/common/layout";

const BookDetailsPage = (props) => {
  const { id } = props.match.params;

  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id } });

  return (
    <Layout>
      {error ? (
        "Something went wrong, kindly refresh"
      ) : loading ? (
        "Loading..."
      ) : (
        <BookContainer book={data.books[0]} />
      )}
    </Layout>
  );
};

export default BookDetailsPage;
