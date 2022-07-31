import CART_ACTION_TYPE from "./Cart.types";

// Reducer state
const INITIAL_STATE = {
  cartItems: [],
  cartIsOpen: false,
};
// Reducer
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };
    default:
      return state;
  }
};
