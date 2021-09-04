import { useReactiveVar } from "@apollo/client"
import { cartItemsVar } from "../../components/cart/cache"

export const useBookAvailableCopies = book => {
  const cartItems = useReactiveVar(cartItemsVar)

  const itemInCart = cartItems.filter(item => item.id === book.id)
  const availableCopiesOfBook =
    book.available_copies - (itemInCart.length === 1 ? itemInCart[0].quantity : 0)

  return availableCopiesOfBook
}
