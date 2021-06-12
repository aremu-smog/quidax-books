import React, { useContext, useState } from "react";
import { useBooksContext } from "./BooksContext";

const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [isOpen, setIsopen] = useState(false);
  const [items, setItems] = useState([]);

  const closeCart = () => setIsopen(false);
  const openCart = () => setIsopen(true);

  const { books } = useBooksContext();

  const removeFromCart = (book) => {
    const bookIndex = items.indexOf(book);

    items.splice(bookIndex, 1);
  };

  const increaseQuantity = (bookInCart) => {
    const the_book = books.filter((book) => book.id === bookInCart.id);
    if (bookInCart.quantity < the_book[0].available_copies) {
      bookInCart.quantity = bookInCart.quantity + 1;
    }
  };
  const decreaseQuantity = (bookInCart) => {
    if (bookInCart.quantity === 1) {
      removeFromCart(bookInCart);
    } else {
      bookInCart.quantity = bookInCart.quantity - 1;
    }
  };

  const addItemToCart = (id) => {
    const the_book = books.filter((book) => book.id === id);

    const book = the_book[0];

    // Check if Item is in cart and only increase the quantity

    const bookInCart = items.filter((book) => book.id === id);

    // The book doesn's exist in cart
    if (bookInCart.length === 0) {
      // Create an object to hold the book properties
      let item = {
        id: book.id,
        image_url: book.image_url,
        title: book.title,
        authors: book.authors,
        price: book.price,
        quantity: 1,
      };

      // Add the book to cart items
      setItems((items) => [item, ...items]);
    } else {
      increaseQuantity(bookInCart[0]);
    }

    openCart();
  };
  const value = {
    cartIsOpen: isOpen,
    openCart: openCart,
    closeCart: closeCart,
    addItemToCart: addItemToCart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity: decreaseQuantity,
    removeFromCart: removeFromCart,
    cartItems: items,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
