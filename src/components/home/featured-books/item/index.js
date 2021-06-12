import React from "react";
import { Link } from "react-router-dom";
import FeaturedBookItemInfo from "./info";
import styled from "styled-components";

const StyledFeaturedBookItem = styled.div`
  max-width: 220px;
  max-height: 330px;
  height: 100vh;
  position: relative;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 568px) {
    max-width: 140px;
    max-height: 210px;
  }
`;
const FeaturedBookItem = ({ book }) => {
  return (
    <StyledFeaturedBookItem>
      <Link to={`/book-details/${book.id}`}>
        <img src={book.image_url} alt={book.title} />
        <FeaturedBookItemInfo book={book} />
      </Link>
    </StyledFeaturedBookItem>
  );
};

export default FeaturedBookItem;
