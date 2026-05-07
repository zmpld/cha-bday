// node modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// components
import App from "./App.jsx";

// css link
import "./index.css";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
