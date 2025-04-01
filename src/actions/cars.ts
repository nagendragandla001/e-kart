import { Car } from "@/types/cars";

export const GET_CARS_REQUEST = "GET_CARS_REQUEST";
export const GET_CARS_SUCCESS = "GET_CARS_SUCCESS";
export const GET_CARS_FAILURE = "GET_CARS_FAILURE";

export const getCarsRequestAction = () => ({
  type: GET_CARS_REQUEST,
});

export const getCarsSuccessAction = (cars: Car[]) => ({
  type: GET_CARS_SUCCESS,
  payload: cars,
});

export const getCarsFailureAction = (error: string) => ({
  type: GET_CARS_FAILURE,
  payload: error,
});
