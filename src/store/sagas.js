import { all, fork } from "redux-saga/effects";

import ImagesSaga from "./images/saga";

export default function* rootSaga() {
  yield all([fork(ImagesSaga)]);
}