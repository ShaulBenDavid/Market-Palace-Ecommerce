import { CategoryItem } from "../Categories/Categories.types";
// Reducer type
enum CART_ACTION_TYPE {
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_OPEN = "SET_CART_OPEN",
};

export type CartItem = CategoryItem & {
  quantity: number;
}

export default CART_ACTION_TYPE;
