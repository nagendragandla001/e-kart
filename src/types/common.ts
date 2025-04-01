import { CarState } from "./cars";
import { MovieState } from "./movies";

export interface RootState {
  carReducer: CarState;
  movieReducer: MovieState;
}
