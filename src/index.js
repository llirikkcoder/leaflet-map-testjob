import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./stores/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
