import carReducer from "../reducers/carReducer";
import { movieReducer, moviesReducer } from "../reducers/moviesReducer";
import rootSaga from "../sagas/rootSaga";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export const rootReducer = combineReducers({
  carReducer,
  movieReducer,
  moviesReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const runsagaMiddleware = () => {
  sagaMiddleware.run(rootSaga);
};

export default store;
