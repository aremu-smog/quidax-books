import React from "react"
import Layout from "../components/common/layout"
import { useQuery } from "@apollo/client"
import { AllBooks, FeaturedBooks } from "../components/home"
import { GET_ALL_BOOKS } from "../queries/getAllBooks"
import LoadingScreen from "../components/home/loader"

const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_BOOKS)

  if (error) {
    return "Bad things happen to good people. Kindly check your internet and refresh" + error
  }
  if (loading) {
    return <LoadingScreen />
  }
  const books = data.books
  return (
    <Layout>
      <FeaturedBooks books={books} />

      <AllBooks books={books} />
    </Layout>
  )
}

export default HomePage
