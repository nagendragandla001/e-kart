import { Movies, MoviesAction } from "@/types/movies";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const getMoviesRequest = (): MoviesAction => ({
  type: GET_MOVIES_REQUEST,
});

export const getMoviesSuccess = (movies: Movies[]): MoviesAction => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = (error: string): MoviesAction => ({
  type: GET_MOVIES_FAILURE,
  payload: error,
});
