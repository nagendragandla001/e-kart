import { getCarsFailureAction, getCarsSuccessAction } from "../actions/cars";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchCars(): Generator<any, void, any> {
  try {
    const response = yield call(
      fetch,
      "https://www.freetestapi.com/api/v1/cars"
    );
    const cars = yield response.json();
    yield put(getCarsSuccessAction(cars));
  } catch (error: any) {
    yield put(getCarsFailureAction(error.message));
  }
}

function* carSaga() {
  yield takeLatest("GET_CARS_REQUEST", fetchCars);
}

export default carSaga;
