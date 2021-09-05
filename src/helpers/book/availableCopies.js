import { useReactiveVar } from "@apollo/client"
import { cartVar } from "../cart"

export const useBookAvailableCopies = book => {
  const { items: cartItems } = useReactiveVar(cartVar)

  const itemInCart = cartItems.filter(item => item.id === book.id)
  const availableCopiesOfBook =
    book.available_copies - (itemInCart.length === 1 ? itemInCart[0].quantity : 0)

  return availableCopiesOfBook
}
