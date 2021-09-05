import React from "react"
import styled, { css } from "styled-components"

const BookTitle = ({ name, featured, large }) => {
  return (
    <P isFeatured={featured} isLarge={large}>
      {name}
    </P>
  )
}

export default BookTitle

const P = styled.p`
  margin-bottom: 0px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 0;
  ${props =>
    props.isFeatured &&
    css`
      font-size: 18px;
      color: white;
    `}
  ${props =>
    props.isLarge &&
    css`
      font-size: 36px;

      margin-bottom: 10px;
      @media screen and (max-width: 568px) {
        font-size: 28px;
      }
    `}
`
