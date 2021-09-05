import React from "react";
import Layout from "../components/common/layout";
import { useQuery, gql, useReactiveVar } from "@apollo/client";
import { AllBooks, FeaturedBooks } from "../components/home";
import { searchVar } from "../hooks/search";
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
const SearchPage = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS_QUERY);

  const { value: searchValue, inProgress } = useReactiveVar(searchVar);

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

  const convertArrayToString = (array) => {
    const names = array.map((item) => item.name);

    return names.join(" ");
  };
  const filteredBooks = books.filter((book) => {
    if (searchValue !== "") {
      const wordRegex = new RegExp(searchValue, "g");

      const { title, genres, tags, authors } = book;

      const longString =
        title +
        convertArrayToString(genres) +
        convertArrayToString(tags) +
        convertArrayToString(authors);
      return wordRegex.test(longString);
    } else {
      return false;
    }
  });

  const NO_OF_RESULTS = filteredBooks.length;
  const heading = (
    <>
      <b>{NO_OF_RESULTS}</b> results found for `<b>{searchValue}</b>`
    </>
  );
  return (
    <Layout>
      {inProgress && <Heading text={heading} />}
      <AllBooks books={filteredBooks} />
    </Layout>
  );
};

export default SearchPage;
