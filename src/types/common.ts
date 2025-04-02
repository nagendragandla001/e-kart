import { CarState } from "./cars";
import { MoviesState, MovieState } from "./movies";

export interface RootState {
  carReducer: CarState;
  movieReducer: MovieState;
  moviesReducer: MoviesState;
}
