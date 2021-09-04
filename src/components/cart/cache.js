import { makeVar, InMemoryCache } from "@apollo/client";

export const cartItemsVar = makeVar([]);
export const cartContainerVar = makeVar([
  {
    isOpen: false,
  },
]);
export const subTotalVar = makeVar(0);

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
        subTotal: {
          read() {
            return subTotalVar();
          },
        },
      },
    },
  },
});

export const calculateSubtotal = () => {
  const sum = cartItemsVar().reduce((sum, item) => {
    return (sum += item.price * item.quantity);
  }, 0);

  subTotalVar(sum);
};

export const increaseQuantity = (bookInCart, bookQuantity) => {
  if (bookInCart.quantity < bookQuantity) {
    bookInCart.quantity = bookInCart.quantity + 1;
  }

  cartItemsVar([...cartItemsVar()]);

  calculateSubtotal();
};
export const decreaseQuantity = (bookInCart) => {
  if (bookInCart.quantity === 1) {
    removeItemFromCart(bookInCart);
  } else {
    bookInCart.quantity = bookInCart.quantity - 1;
  }
  cartItemsVar([...cartItemsVar()]);

  calculateSubtotal();
};

export const openCart = () => {
  cartContainerVar([
    {
      isOpen: true,
    },
  ]);
};

const getBook = (bookId) => {
  const bookInCart = cartItemsVar().filter(
    (cartItem) => cartItem.id === bookId
  );

  return bookInCart;
};

export const addItemToCart = (bookId, bookQuantity, bookPrice) => {
  const bookInCart = getBook(bookId);

  // Check if Item is in cart and only increase the quantity

  // The book doesn's exist in cart
  if (bookInCart.length === 0) {
    // Create an object to hold the book properties
    const item = {
      id: bookId,
      quantity: 1,
      price: bookPrice,
    };

    // Add the book to cart items
    cartItemsVar([item, ...cartItemsVar()]);

    calculateSubtotal();
  } else {
    increaseQuantity(bookInCart[0], bookQuantity);
  }
  openCart();
};

export const removeItemFromCart = (cartItem) => {
  const bookInCartIndex = cartItemsVar().indexOf(cartItem);
  cartItemsVar().splice(bookInCartIndex, 1);
  cartItemsVar([...cartItemsVar()]);

  calculateSubtotal();
};

export const closeCart = () => {
  cartContainerVar([
    {
      isOpen: false,
    },
  ]);
};
