import React from "react";
import styled, { css } from "styled-components";
import MetaList from "./lists";

const Meta = styled.div`
  p {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  span {
    font-weight: normal !important;
  }
  text-align: ${(props) => (props.center ? "center" : "left")};

  ${(props) =>
    props.isHalfOnMobile &&
    css`
      @media screen and (max-width: 768px) {
        width: 48%;
        margin-top: 12px;
      }
    `}
`;
const BookMeta = ({ title, value, center, featured, half_no_mobile }) => {
  //Check if the value passed is a string
  const valueIsArray = Array.isArray(value);
  // console.log(value);

  // console.log(valueIsString);
  return (
    <Meta center={center} isHalfOnMobile={half_no_mobile}>
      <p>
        <b>{title}</b>
      </p>
      <p>
        {valueIsArray ? (
          <MetaList items={value} isFeatured={featured} />
        ) : (
          value
        )}
      </p>
    </Meta>
  );
};

export default BookMeta;
