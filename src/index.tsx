import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoadingContextApi } from "./context/loading";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LoadingContextApi>
      <App />
    </LoadingContextApi>
  </React.StrictMode>
);
