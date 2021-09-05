import React from "react"
import styled from "styled-components"
import { qbOutlineGray } from "../../../styles/colors"
import { BookTitle, BookPrice, BookAuthors } from "../../common/book/"
import RemoveFromCart from "./remove"
import { gql, useQuery } from "@apollo/client"
import { increaseQuantity, decreaseQuantity } from "../../../helpers/cart"

const GET_BOOK_IN_CART = gql`
  query BookInCart($cartItemId: String) {
    books(where: { id: $cartItemId }) {
      title
      image_url
      authors {
        name
      }
      price
      available_copies
    }
  }
`
const CartItem = ({ cartItem }) => {
  const cartItemId = cartItem.id
  const cartItemQuantity = cartItem.quantity
  const { loading, error, data } = useQuery(GET_BOOK_IN_CART, {
    variables: { cartItemId }
  })

  if (loading) {
    return "..."
  }

  if (error) {
    return ".../"
  }

  const book = data.books[0]

  return (
    <Wrapper>
      <Img src={book.image_url} />
      <Meta>
        <div>
          <BookTitle name={book.title} />
          <BookAuthors authors={book.authors} />
        </div>

        <RemoveFromCart cartItem={cartItem} />
      </Meta>
      <PriceQuantity>
        <BookPrice amount={book.price} />
        <QuantityToggleWrapper>
          <button onClick={() => decreaseQuantity(cartItem)}>-</button>
          <div>{cartItemQuantity}</div>
          <button onClick={() => increaseQuantity(cartItem, book.available_copies)}>+</button>
        </QuantityToggleWrapper>
        <SubTotal>
          <BookPrice amount={book.price * cartItemQuantity} />
        </SubTotal>
      </PriceQuantity>
    </Wrapper>
  )
}

export default CartItem

const Wrapper = styled.div`
  display: flex;
  padding: 24px 0px;
  border-bottom: 1px solid ${qbOutlineGray};
  font-size: 12px;
  justify-content: space-between;
`

const Img = styled.img`
  width: 60px;
  height: 90px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-right: 15px;
  box-shadow: 0px 10px 30px 0px #0000001a;
`
const Meta = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
`

const PriceQuantity = styled.div`
  width: 96px;
  text-align: right;
  font-size: 14px;
`

const QuantityToggleWrapper = styled.section`
  display: inline-flex;
  align-items: center;
  margin-top: 4px;
  button {
    background-color: #f9f9fb;
    width: 30px;
    height: 30px;
    border: 1px solid ${qbOutlineGray};
    line-height: 0;
  }
  div {
    width: 30px;
    text-align: center;
    padding: 6px 0px;
    border: 1px solid ${qbOutlineGray};
  }
`
const SubTotal = styled.p`
  font-weight: bold;
`
