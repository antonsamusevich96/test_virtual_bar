import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./router";
import { store } from "./store";
import { Provider } from "react-redux";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </React.StrictMode>,
);
