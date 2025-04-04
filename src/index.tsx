import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { Provider } from "react-redux";
import store, { runsagaMiddleware } from "./utils/storeConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

runsagaMiddleware();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
