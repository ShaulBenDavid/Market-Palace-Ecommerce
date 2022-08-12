import { all, call } from "typed-redux-saga/macro";

import { categoriesSaga } from "./Categories/Categories.saga";
import { userSaga } from "./User/User.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(userSaga)]);
}
