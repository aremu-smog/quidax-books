import styled from "styled-components";

const Icon = styled.svg`
  display: block;
  marginb-bottom: 0px;
  path {
    fill: ${(props) => (props.isLight ? "white" : "black")};
  }
`;

export default Icon;
