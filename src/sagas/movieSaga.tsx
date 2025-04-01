import {
  GET_MOVIES_REQUEST,
  getMoviesFailure,
  getMoviesSuccess,
} from "../actions/movies";
import { call, put, takeEvery, takeLeading } from "redux-saga/effects";
const URL = "https://www.freetestapi.com/api/v1/movies";

function* getMovies(): Generator<any, void, any> {
  try {
    const response = yield call(fetch, URL);
    const movies = yield response.json();

    yield put(getMoviesSuccess(movies));
  } catch (error: any) {
    yield put(getMoviesFailure(error.message));
  }
}

function* movieSaga() {
  yield takeLeading(GET_MOVIES_REQUEST, getMovies);
}

export default movieSaga;
