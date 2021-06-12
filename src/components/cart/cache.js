import { makeVar, InMemoryCache } from "@apollo/client";

export const cartItemsVar = makeVar([]);
export const cartContainerVar = makeVar([
  {
    isOpen: false,
  },
]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        cartContainer: {
          read() {
            return cartContainerVar();
          },
        },
      },
    },
  },
});

const increaseQuantity = (bookInCart) => {
  bookInCart.quantity = bookInCart.quantity + 1;
  // const the_book = books.filter((book) => book.id === bookInCart.id);
  // if (bookInCart.quantity < the_book[0].available_copies) {
  // }
};

export const openCart = () => {
  alert("Open cart");
  const cartContainer = cartContainerVar();
  cartContainer[0].isOpen = true;
};

export const addItemToCart = (bookId) => {
  const bookInCart = cartItemsVar().filter(
    (cartItem) => cartItem.id === bookId
  );

  // Check if Item is in cart and only increase the quantity

  // The book doesn's exist in cart
  if (bookInCart.length === 0) {
    // Create an object to hold the book properties
    const item = {
      id: bookId,
      quantity: 1,
    };

    // Add the book to cart items
    cartItemsVar([...cartItemsVar(), item]);
    openCart();
  } else {
    increaseQuantity(bookInCart[0]);
  }
};

export const closeCart = () => {
  const cartContainer = cartContainerVar();
  cartContainer[0].isOpen = false;
};
