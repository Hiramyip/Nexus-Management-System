import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importa tu componente desde App.tsx
import "./styles/scrollbar.css";
import "./styles/global.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento raíz 'root' en el HTML.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);