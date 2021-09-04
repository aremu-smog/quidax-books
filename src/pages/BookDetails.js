import { gql, useQuery } from "@apollo/client";
import React from "react";
import BookContainer from "../components/book-details/container";

import Layout from "../components/common/layout";

const GET_BOOK = gql`
  query Book($id: String) {
    books(where: { id: $id }) {
      id
      title
      featured
      image_url
      authors {
        name
      }
      tags {
        name
      }
      rating
      genres {
        name
      }
      price
      number_of_purchases
      likes
      published_at
      available_copies
      full_description
    }
  }
`;
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
