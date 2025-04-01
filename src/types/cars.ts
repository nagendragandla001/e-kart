export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  fuelType: string;
  transmission: string;
  engine: string;
  horsepower: number;
  features: string[];
  owners: number;
  image: string;
}
export interface CarState {
  cars: Car[];
  loading: boolean;
  error: string | null;
}
export interface CarAction {
  type: string;
  payload?: any;
}
export interface CarReducer {
  (state: CarState, action: CarAction): CarState;
}
