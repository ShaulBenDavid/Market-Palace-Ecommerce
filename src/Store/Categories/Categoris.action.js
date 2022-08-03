import { newReducer } from "../../Utils/Reducer/Reducer";
import CATEGORIES_ACTION_TYPES from "./Categories.types";

export const fetchCategoriesStart = () => newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoreis) => newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoreis);

export const fetchCategoriesFailed = (error) => newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);