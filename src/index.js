import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootreducer from "./reducers/rootReducer";

const theStore = createStore(rootreducer);
ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
