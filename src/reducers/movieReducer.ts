import {
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from "../actions/movies";
import { MoviesAction, MovieState } from "@/types/movies";

const movieReducer = (state = [], action: MoviesAction) => {
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

export default movieReducer;
