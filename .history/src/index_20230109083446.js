import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

// (async function app() {
//     const main = null || document.getElementById('main');
//     main.innerHTML = await Home();
// })();

ReactDOM.render(<Home />, document.getElementById("main"));
