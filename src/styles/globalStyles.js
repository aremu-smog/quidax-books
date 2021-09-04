import { createGlobalStyle } from "styled-components"

import { qbGreen, qbRed } from "./colors"

import Ubuntu from "./fonts/Ubuntu-Regular.ttf"
import UbuntuBold from "./fonts/Ubuntu-Bold.ttf"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu';
        src: url(${Ubuntu}) ;
        font-weight: 400;
    }
    @font-face {
        font-family: 'Ubuntu';
        src:  url(${UbuntuBold}) ;
         font-weight: 700;
    }


*{
    box-sizing: border-box;
    font-family: Ubuntu ;
}



body {
    margin: 0;
    font-family: Ubuntu;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
button{
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border-radius: 0px;
}

a{
    text-decoration: none;
    color: inherit;
}


.flex{
    display: flex;
}

.flex-vertical-center{
    align-items: center;
}

.flex-space-between{
    justify-content: space-between;
}

.swiper-wrapper{
    padding-top: 20px;
    padding-bottom: 60px;
}

.swiper-pagination-bullet-active{
    background-color: ${qbGreen} !important;
}

.available{
    font-size: 12px;
    color: ${qbGreen};
}

.out-of-stock{
    font-size: 12px;
    color: ${qbRed};
}

.swiper-button-prev{
    left: 0px !important;
}


.swiper-button-prev:after, .swiper-button-next:after {
    
    content: "" !important;
    border-top: 5px solid transparent;
    border-right: 8px solid black;
    border-bottom: 5px solid transparent;
}

.swiper-button-next:after{
    transform: rotate(-180deg);
}
.swiper-button-next{
    right: 0px !important;
}
.swiper-button-prev, .swiper-button-next{
    z-index: 100 !important;
    width: 40px !important;
    background: rgba(255,255,255,0.6);
    height: 100% !important;
    top: 0 !important;
    backdrop-filter: blur(4px) !important;
}



`

export default GlobalStyle
