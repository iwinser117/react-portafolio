import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import track from "./utils/track";
import { ca } from "date-fns/locale";

// Inicializar el rastreador de visitas
try{
  track();
}catch(err){
  console.error('Error initializing tracker:', err);
}


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
