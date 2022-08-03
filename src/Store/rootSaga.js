import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./Categories/Categories.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
