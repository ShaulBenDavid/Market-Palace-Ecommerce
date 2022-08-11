import { createSelector } from "reselect";
import { CategoriesState } from "./Categories.reducer";
import { CategoryMap } from "./Categories.types";

const selectCategoriesReducer = (state): CategoriesState => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (state) =>
  state.reduce((acc, category): CategoryMap => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (category) => category.isLoading
);
