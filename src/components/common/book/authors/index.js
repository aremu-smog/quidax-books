import React from "react"
import BookMeta from "../meta"

const BookAuthors = ({ authors = [], isInline }) => {
  return <BookMeta value={authors} isInline={isInline} />
}

export default BookAuthors
