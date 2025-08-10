import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { HelmetProvider } from "react-helmet-async";


// (async function app() {
//     const main = null || document.getElementById('main');
//     main.innerHTML = await Home();
// })();

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <BrowserRouter>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </BrowserRouter>
);
