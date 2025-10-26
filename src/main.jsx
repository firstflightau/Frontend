import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./tailwindIndex.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const removeLoader = () => {
  const loader = document.getElementById("initial-loader");
  if (loader) {
    loader.style.opacity = "0"; // Smooth fade-out effect
    setTimeout(() => {
      loader.remove(); // Completely remove from DOM
    }, 700); // Matches the fade-out duration
  }
};
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);

removeLoader();
