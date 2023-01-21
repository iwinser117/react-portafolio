const Swal = require("sweetalert2");
const imgs = [
  "../assets/d1Python.jpg",
  "../assets/d2Java.jpg",
  "../assets/d3Soft.jpg",
  "../assets/d4Web.jpg",
];
function mostrarDiploma(idImg) {
  Swal.fire({
    // title: "Sweet!",
    // text: "Modal with a custom image.",
    imageUrl: imgs[idImg],
    imageWidth: 1200,
    width : 600,
    imageHeight: 400,
    imageAlt: "Custom image",
  });
}

export default mostrarDiploma;
