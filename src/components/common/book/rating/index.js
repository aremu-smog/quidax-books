import React from "react"
import styled from "styled-components"
import BookMeta from "../meta"
import Stars from "./stars"

const BookRating = ({ no }) => {
  return (
    <Rating>
      <BookMeta
        title={
          <>
            <b>Ratings:</b> <span>{no}</span>
          </>
        }
        value={<Stars no={no} />}
      />
    </Rating>
  )
}

export default BookRating

const Rating = styled.div`
  p {
    margin-top: 0px;
    margin-bottom: 4px;
  }
  div {
    margin-bottom: 0px;
  }
`
