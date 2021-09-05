import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const BackButton = ({ action, url = "#" }) => {
  return (
    <Link to={url}>
      <Button onClick={action}>
        <svg width='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M20 13.2819V11.5338H7.37343L12.6712 6.23606L11.4351 5L4.90132 11.5338L4 12.4078L4.90132 13.2819L11.4351 19.8157L12.6712 18.5796L7.37343 13.2819H20Z'
            fill='black'
          />
        </svg>
        Back
      </Button>
    </Link>
  )
}

BackButton.propTypes = {}

export default BackButton

const Button = styled.button`
  font-weight: bold;
  display: flex;
  align-items: center;
  svg {
    margin-right: 12px;
  }
`
