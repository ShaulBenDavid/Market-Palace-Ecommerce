import { newReducer } from "../../Utils/Reducer/Reducer";
import CART_ACTION_TYPE from "./Cart.types";

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

// Adding new item or existing one
export const addItemToCart = (cartItems, itemToAdd) => {
  const newCartItems = addNewItemToCart(cartItems, itemToAdd);
  return newReducer(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Remove item or decrease quantity
export const removeItemToCart = (cartItems, itemToRemove) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  return newReducer(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Delete Item from cart
export const deleteItemToCart = (cartItems, itemToDelete) => {
  const newCartItems = deleteCartItem(cartItems, itemToDelete);
  return newReducer(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems);
};

// Set cart is open
export const setCartIsOpen = (bool) => {
  return newReducer(CART_ACTION_TYPE.SET_CART_OPEN, bool);
};
