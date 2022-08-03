import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./Categories/Categories.saga";
import { userSaga } from "./User/User.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
