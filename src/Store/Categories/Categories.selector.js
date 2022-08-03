import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (state) =>
  state.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (category) => category.isLoading
);