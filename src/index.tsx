import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import carReducer from "./reducers/carReducer";
import createSagaMiddleware from "redux-saga";
// import carSaga from "./sagas/carSaga";
import { Provider } from "react-redux";
import rootSaga from "./sagas/rootSaga";
import { movieReducer, moviesReducer } from "./reducers/moviesReducer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const rootReducer = combineReducers({
  carReducer,
  movieReducer,
  moviesReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
