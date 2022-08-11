import { AnyAction } from "redux";
import { setCartIsOpen, setCartItems } from "./Cart.action";
// Types
import { CartItem } from "./Cart.types";

export type CartState = {
  readonly cartItems: CartItem[];
  readonly cartIsOpen: boolean;
};
// Reducer state
const INITIAL_STATE: CartState = {
  cartItems: [],
  cartIsOpen: false,
};
// Reducer
export const cartReducer = (
  state = INITIAL_STATE,
  action: AnyAction
): CartState => {
  if (setCartIsOpen.match(action)) {
    return {
      ...state,
      cartIsOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
