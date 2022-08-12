import { CategoryItem } from "../Categories/Categories.types";
import {
  newReducer,
  withMatcher,
  ActionWithPayload,
} from "../../Utils/Reducer/Reducer";
import CART_ACTION_TYPE, { CartItem } from "./Cart.types";

const addNewItemToCart = (
  cartItems: CartItem[],
  itemToAdd: CategoryItem
): CartItem[] => {
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
const removeCartItem = (
  cartItems: CartItem[],
  itemToRemove: CartItem
): CartItem[] => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  if (existingItems?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (
  cartItems: CartItem[],
  itemToDelete: CartItem
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToDelete.id);
};

// Types

export type SetCarIsOpen = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPE.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    newReducer(CART_ACTION_TYPE.SET_CART_ITEMS, cartItems)
);

// Adding new item or existing one
export const addItemToCart = (cartItems: CartItem[], itemToAdd: CategoryItem) => {
  const newCartItems = addNewItemToCart(cartItems, itemToAdd);
  return setCartItems(newCartItems);
};

// Remove item or decrease quantity
export const removeItemToCart = (cartItems: CartItem[], itemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  return setCartItems(newCartItems);
};

// Delete Item from cart
export const deleteItemToCart = (cartItems: CartItem[], itemToDelete: CartItem) => {
  const newCartItems = deleteCartItem(cartItems, itemToDelete);
  return setCartItems(newCartItems);
};

// Set cart is open
export const setCartIsOpen = withMatcher((bool: boolean): SetCarIsOpen => {
  return newReducer(CART_ACTION_TYPE.SET_CART_OPEN, bool);
});
