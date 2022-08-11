import { createSelector } from "reselect";
// Types
import { CartState } from "./Cart.reducer";

const cartSelectorReducer = (state): CartState => state.cart;

export const cartItemsSelector = createSelector(
  [cartSelectorReducer],
  (cart) => cart.cartItems
);

export const cartIsOpenSelector = createSelector(
  [cartSelectorReducer],
  (cart) => cart.cartIsOpen
);

export const cartTotalSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce(
      (sum, currentItem) => sum + currentItem.quantity * currentItem.price,
      0
    )
);

export const cartCountSelector = createSelector(
  [cartItemsSelector],
  (cartItems) =>
    cartItems.reduce((sum, currentItem) => sum + currentItem.quantity, 0)
);
