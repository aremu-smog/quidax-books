import React from "react"
import styled from "styled-components"
import { qbOutlineGray } from "../../../styles/colors"
import { Container } from "../../../styles/common"

const Heading = ({ text, isBold = true }) => {
  return (
    <Container>
      <StyledHeading isBold={isBold}>{text}</StyledHeading>
    </Container>
  )
}

export default Heading

const StyledHeading = styled.h3`
  font-size: 14px;
  border-bottom: 1px solid ${qbOutlineGray};
  margin-top: 27px;
  font-weight: ${props => (props.isBold ? "700" : "400")};
  padding-bottom: 14px;
`
