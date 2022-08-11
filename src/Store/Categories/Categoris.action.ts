import {
  newReducer,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../Utils/Reducer/Reducer";
import CATEGORIES_ACTION_TYPES, { Category } from "./Categories.types";

// Types
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategorieFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

// Actions
export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categoreis: Category[]): FetchCategoriesSuccess =>
    newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoreis)
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategorieFailed =>
    newReducer(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
