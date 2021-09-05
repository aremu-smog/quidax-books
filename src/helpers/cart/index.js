import { makeVar } from "@apollo/client"

export const cartVar = makeVar({
  isOpen: false,
  items: []
})

export const increaseQuantity = (bookInCart, bookQuantity) => {
  if (bookInCart.quantity < bookQuantity) {
    bookInCart.quantity = bookInCart.quantity + 1
  }

  cartVar({ ...cartVar() })
}
export const decreaseQuantity = bookInCart => {
  if (bookInCart.quantity === 1) {
    removeItemFromCart(bookInCart)
  } else {
    bookInCart.quantity = bookInCart.quantity - 1
  }
  cartVar({ ...cartVar() })
}

const getBook = bookId => {
  const bookInCart = cartVar().items.filter(cartItem => cartItem.id === bookId)

  return bookInCart
}

export const addItemToCart = (bookId, bookQuantity, bookPrice) => {
  const bookInCart = getBook(bookId)
  const { items: itemsInCart } = cartVar()

  // Check if Item is in cart and only increase the quantity

  // The book doesn's exist in cart
  if (bookInCart.length === 0) {
    // Create an object to hold the book properties
    const item = {
      id: bookId,
      quantity: 1,
      price: bookPrice
    }

    // Add the book to cart items
    cartVar().items = [item, ...itemsInCart]
  } else {
    increaseQuantity(bookInCart[0], bookQuantity)
  }
  openCart()
}

export const removeItemFromCart = cartItem => {
  const { items } = cartVar()
  const bookInCart = items[items.indexOf(cartItem)]

  cartVar().items = items.filter(item => bookInCart.id !== item.id)
  cartVar({ ...cartVar() })

  console.log(bookInCart)
}

export const openCart = () => {
  cartVar().isOpen = true
  cartVar({ ...cartVar() })
}

export const closeCart = () => {
  cartVar().isOpen = false
  cartVar({ ...cartVar() })
}
