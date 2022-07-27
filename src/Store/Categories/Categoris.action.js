import { newReducer } from "../../Utils/Reducer/Reducer";
import CATEGORIES_ACTION_TYPES from "./Categories.types";

export const setCategories = (categories) => newReducer(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);