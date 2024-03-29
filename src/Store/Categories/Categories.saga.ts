import { all, takeLatest, put, call } from "typed-redux-saga/macro";

import { getCollectionAndDocuments } from "../../Utils/FireBase/FIreBase";

import CATEGORIES_ACTION_TYPES from "./Categories.types";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./Categoris.action";

export function* fetchCategoriesStart() {
  try {
    const categoriesArray = yield* call(getCollectionAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategoriesStart() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesStart
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategoriesStart)]);
}
