import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import configureStore from "./redux/store"
import React from "react";
const store = configureStore()
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);