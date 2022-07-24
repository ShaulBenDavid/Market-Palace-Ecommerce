import { useReducer, createContext } from "react";
import { newReducer } from "../Utils/Reducer/Reducer";

const addNewItemToCart = (cartItems, itemToAdd) => {
  // check if these item all ready exist in cart
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );

  // if the item exist
  if (existingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // default
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

// Remove item or decrease quantity
const removeCartItem = (cartItems, itemToRemove) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, itemToDelete) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

// Context
export const CartContext = createContext({
  cartItems: [],
  cartIsOpen: false,
  cartQuantity: 0,
  setCartIsOpen: () => false,
  addItemToCart: () => [],
  deleteItemToCart: () => [],
  removeItemToCart: () => [],
});
// Reducer type
export const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};
// Reducer state
const INITIAL_STATE = {
  cartItems: [],
  cartIsOpen: false,
  cartQuantity: 0,
};
// Reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };
    default:
      throw new Error(`unable to handle ${type} in cart reducer`);
  }
};

// Provider
export const CartProvider = ({ children }) => {
  const [{ cartItems, cartIsOpen, cartQuantity }, dispacth] = useReducer(
    cartReducer,
    INITIAL_STATE
  );
    // Set item
  const updateCartItems = (newCartItems) => {
    const totalItemsQ = newCartItems.reduce(
      (sum, currentItem) => sum + currentItem.quantity,
      0
    );

    dispacth(newReducer(
      CART_ACTION_TYPE.SET_CART_ITEMS,
      { cartQuantity: totalItemsQ, cartItems: newCartItems },
    ));
  };

  // Adding new item or existing one
  const addItemToCart = (itemToAdd) => {
    const newCartItems = addNewItemToCart(cartItems, itemToAdd);
    updateCartItems(newCartItems);
  };

  // Remove item or decrease quantity
  const removeItemToCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    updateCartItems(newCartItems);
  };

  // Delete Item from cart
  const deleteItemToCart = (itemToDelete) => {
    const newCartItems = deleteCartItem(cartItems, itemToDelete);
    updateCartItems(newCartItems);
  };

  // Set cart is open
  const setCartIsOpen = (bool) => {
    dispacth(newReducer(CART_ACTION_TYPE.SET_CART_OPEN, bool));
  };

  const value = {
    cartItems,
    cartQuantity,
    addItemToCart,
    cartIsOpen,
    deleteItemToCart,
    removeItemToCart,
    setCartIsOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
