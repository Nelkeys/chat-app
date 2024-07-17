import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ContextProvider } from "./functions/context";
import "./assets/VisbyRoundCF-Regular.woff";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);

// Register the service worker
serviceWorkerRegistration.register();
