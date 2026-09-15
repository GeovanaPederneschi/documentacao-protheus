import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AccessProvider } from "./lib/AccessContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AccessProvider>
        <App />
      </AccessProvider>
    </BrowserRouter>
  </StrictMode>,
);
