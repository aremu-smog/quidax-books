import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const BookDetailsFullDescription = ({ content }) => {
  return (
    <FullDescription>
      <ReactMarkdown>{content}</ReactMarkdown>
    </FullDescription>
  )
}

export default BookDetailsFullDescription

const FullDescription = styled.section`
  margin-top: 32px;
  line-height: 1.5;
`
