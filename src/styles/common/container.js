import styled from "styled-components"

const Container = styled.section`
  max-width: ${props => (props.boxed ? `1220px` : `1440px `)};
  padding: 0px 40px;
  width: 100%;

  margin: ${props => !props.boxed && `auto`};

  @media screen and (max-width: 568px) {
    padding: 0px 30px;
  }
`

export default Container
