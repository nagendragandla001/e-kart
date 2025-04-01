import { all, fork } from "redux-saga/effects";
import carSaga from "./carSaga";
import movieSaga from "./movieSaga";

const rootSaga = function* () {
  yield all([fork(carSaga), fork(movieSaga)]);
};

export default rootSaga;
