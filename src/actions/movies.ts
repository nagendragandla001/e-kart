import { Movie, MoviesAction } from "@/types/movies";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const GET_MOVIE_REQUEST = "GET_MOVIE_REQUEST";
export const GET_MOVIE_SUCCESS = "GET_MOVIE_SUCCESS";
export const GET_MOVIE_FAILURE = "GET_MOVIE_FAILURE";

export const getMoviesRequest = (): MoviesAction => ({
  type: GET_MOVIES_REQUEST,
});

export const getMoviesSuccess = (movies: Movie[]): MoviesAction => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = (error: string): MoviesAction => ({
  type: GET_MOVIES_FAILURE,
  payload: error,
});

export const getMovieRequest = (id: string): MoviesAction => ({
  type: GET_MOVIE_REQUEST,
  payload: id,
});

export const getMovieSuccess = (movie: Movie): MoviesAction => ({
  type: GET_MOVIE_SUCCESS,
  payload: movie,
});

export const getMovieFailure = (error: string): MoviesAction => ({
  type: GET_MOVIE_FAILURE,
  payload: error,
});
