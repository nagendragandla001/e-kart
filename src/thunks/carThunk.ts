import {
  getCarsFailureAction,
  getCarsSuccessAction,
  getCarsRequestAction,
} from "../actions/cars";

export function getCarsRequest() {
  return (dispatch: any) => {
    dispatch(getCarsRequestAction());
    return fetch("https://www.freetestapi.com/api/v1/cars")
      .then((response) => response.json())
      .then((cars) => dispatch(getCarsSuccessAction(cars)))
      .catch((error: any) => dispatch(getCarsFailureAction(error.message)));
  };
}
