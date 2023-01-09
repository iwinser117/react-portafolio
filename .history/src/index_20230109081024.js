import Home from "./pages/Home";

(async function app() {
    const main = null || document.getElementById('main');
    main.innerHTML = await Home();
})()