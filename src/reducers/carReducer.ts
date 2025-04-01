import { CarAction } from "@/types/cars";

const carReducer = (state = [], action: CarAction) => {
  switch (action.type) {
    case "GET_CARS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_CARS_SUCCESS":
      return {
        ...state,
        loading: false,
        cars: action.payload,
      };
    case "GET_CARS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default carReducer;
