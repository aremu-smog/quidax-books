import React from "react";
import Layout from "../components/common/layout";
import { useQuery, gql } from "@apollo/client";
import { AllBooks, FeaturedBooks } from "../components/home";
import Heading from "../components/common/heading";

const ALL_BOOKS_QUERY = gql`
  query {
    books {
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
    }
  }
`;
const HomePage = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  if (error) {
    return (
      "Bad things happen to good people. Kindly check your internet and refresh" +
      error
    );
  }
  if (loading) {
    return "Loading...";
  }
  const books = data.books;
  return (
    <Layout>
      <FeaturedBooks books={books} />

      <Heading text="All Books" />
      <AllBooks books={books} />
    </Layout>
  );
};

export default HomePage;
