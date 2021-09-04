import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  BookTitle,
  BookPurchasesLikesAndRating,
  BookMeta,
  BookCopies,
  BookPrice,
  BookAuthors,
} from "../../../common/book/";
import { Link } from "react-router-dom";
import { formatDate } from "../../../../helpers/date";
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from "../../../cart/cache";

import AllBookItemAddToCart from "./add-to-cart";

const Section = styled.section`
  display: flex;
  font-size: 12px;

  &:hover {
    box-shadow: 0px 30px 60px 0px #00000026;
  }
`;
const Img = styled.img`
  width: 110px;
  height: 183px;
  object-fit: cover;
  object-position: center;
`;
const Info = styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-top: 4px;
  line-height: 1.2;
`;
const AllBookItem = ({ book }) => {
  const cartItems = useReactiveVar(cartItemsVar);

  // const [availableCopiesOfBook, setAvailableCopiesOfBook] = useState(
  //   book.available_copies
  // );

  const itemInCart = cartItems.filter((item) => item.id === book.id);
  const availableCopiesOfBook =
    book.available_copies -
    (itemInCart.length === 1 ? itemInCart[0].quantity : 0);

  // useEffect(() => {
  //   const itemInCart = cartItems.filter((item) => item.id === book.id);

  //   setAvailableCopiesOfBook(() => {
  //     return book.available_copies - itemInCart[0]?.quantity || 0;
  //   });
  // }, [cartItems]);

  return (
    <Link to={`/book-details/${book.id}`}>
      <Section>
        <Img src={book.image_url} alt={book.title} />
        <Info>
          <div>
            <BookTitle name={book.title} />
            <P>
              <Flex>
                <BookAuthors authors={book.authors} /> &nbsp; - &nbsp;
                <BookMeta value={formatDate(book.published_at, "yearOnly")} />
              </Flex>
              <BookMeta value={book.genres} />
            </P>
          </div>
          <BookPurchasesLikesAndRating
            no_of_purchases={book.number_of_purchases}
            no_of_likes={book.likes}
            rating={book.rating}
          />

          <Flex>
            <BookPrice amount={book.price} /> &nbsp;&nbsp;
            <BookCopies no_of_copies={availableCopiesOfBook} />
          </Flex>
          {availableCopiesOfBook > 0 ? (
            <AllBookItemAddToCart
              book_id={book.id}
              book_copies={availableCopiesOfBook}
              book_price={book.price}
            />
          ) : null}
        </Info>
      </Section>
    </Link>
  );
};

export default AllBookItem;
