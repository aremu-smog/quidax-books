import React from "react"
import styled from "styled-components"
import MetaList from "./lists"

const Meta = styled.div`
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  span {
    font-weight: normal !important;
  }
  text-align: ${props => (props.center ? "center" : "left")};

  display: ${props => props.isInline && `inline-block`};
`

const MetaValue = styled.p`
  margin-top: 4px !important;
`
const BookMeta = ({ title, value, center, featured, isInline }) => {
  //Check if the value passed is a string
  const valueIsArray = Array.isArray(value)

  return (
    <Meta center={center} isInline={isInline}>
      <p>
        <b>{title}</b>
      </p>
      <MetaValue>
        {valueIsArray ? <MetaList items={value} isFeatured={featured} /> : value}
      </MetaValue>
    </Meta>
  )
}

export default BookMeta
