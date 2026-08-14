import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { ca } from "date-fns/locale";
import "./locales/i18nConfig";


// (async function app() {
//     const main = null || document.getElementById('main');
//     main.innerHTML = await Home();
// })();

const root = ReactDOM.createRoot(document.getElementById("main"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
