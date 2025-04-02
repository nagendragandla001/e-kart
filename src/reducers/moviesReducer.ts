import { combineReducers } from "redux";
import {
  GET_MOVIE_FAILURE,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from "../actions/movies";
import { MoviesAction } from "@/types/movies";

export const moviesReducer = (state = [], action: MoviesAction) => {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.payload, loading: false };
    case GET_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const movieReducer = (state = {}, action: MoviesAction) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return { ...state, loading: true };
    case GET_MOVIE_SUCCESS:
      return { ...state, movie: action.payload, loading: false };
    case GET_MOVIE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
