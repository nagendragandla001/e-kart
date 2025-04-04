import {
  GET_CARS_FAILURE,
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  getCarsFailureAction,
  getCarsRequestAction,
  getCarsSuccessAction,
} from "./cars";

describe("Cars Action as GET_CARS REQUEST", () => {
  test("GET_CARS_REQUEST", () => {
    expect(getCarsRequestAction()).toEqual({ type: GET_CARS_REQUEST });
  });

  test("GET_CARS_SUCCESS", () => {
    const mockCars = [
      {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        color: "Silver",
        mileage: 20000,
        price: 25000,
        fuelType: "Gasoline",
        transmission: "Automatic",
        engine: "2.0L 4-cylinder",
        horsepower: 169,
        features: ["Bluetooth", "Backup Camera", "Keyless Entry"],
        owners: 1,
        image: "https://fakeimg.pl/500x500/cccccc",
      },
    ];

    expect(getCarsSuccessAction(mockCars)).toEqual({
      type: GET_CARS_SUCCESS,
      payload: mockCars,
    });
  });

  test("GET_CARS_FAILURE", () => {
    const errorMsg = "Something went wrong!";

    expect(getCarsFailureAction(errorMsg)).toEqual({
      type: GET_CARS_FAILURE,
      payload: "Something went wrong!",
    });
  });
});
