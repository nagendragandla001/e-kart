import { MoviesAction } from "@/types/movies";
import {
  GET_MOVIE_REQUEST,
  GET_MOVIES_REQUEST,
  getMovieFailure,
  getMoviesFailure,
  getMoviesSuccess,
  getMovieSuccess,
} from "../actions/movies";
import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
const URL = "https://www.freetestapi.com/api/v1/movies";

function* getMovies(): Generator<any, void, any> {
  try {
    const response = yield call(fetch, URL);
    const movies = yield response.json();

    yield put(getMoviesSuccess(movies));
  } catch (error: any) {
    yield put(getMoviesFailure("Something went wrong!!"));
  }
}

function* getMovie(action: MoviesAction): Generator<any, void, any> {
  try {
    const response = yield call(fetch, `${URL}/${action.payload}`);
    const movie = yield response.json();

    yield put(getMovieSuccess(movie));
  } catch (error) {
    yield put(getMovieFailure("Something went wrong!"));
  }
}

function* movieSaga() {
  yield takeLatest(GET_MOVIES_REQUEST, getMovies);
  yield takeLatest(GET_MOVIE_REQUEST, getMovie);
}

export default movieSaga;
