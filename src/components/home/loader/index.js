import React from "react"
import styled, { keyframes } from "styled-components"
import loaderLogo from "../../../icons/loader-logo.svg"

const LoadingScreen = () => {
  return (
    <Wrapper>
      <img src={loaderLogo} alt='' />
    </Wrapper>
  )
}

const fading = keyframes`
    0% {
      box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0);
    }
    40% {
      box-shadow: 0px 0px 0px 20px rgba(255, 255, 255, 0.3);
    }
    100% {
      box-shadow: 0px 0px 0px 30px rgba(255, 255, 255, 0);
    }
    /* 100% {
      box-shadow: 0px 0px 0px 40px rgba(255, 255, 255, 0);
    } */
    
  `

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    border-radius: 500%;

    width: 120px;
    box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0);

    animation: ${fading} 1.5s linear 0.5s infinite forwards;
  }
`

export default LoadingScreen
