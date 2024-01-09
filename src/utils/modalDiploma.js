const Swal = require("sweetalert2");
const imgs = [
  "../assets/d3Soft.jpg",
  "../assets/d4Web.jpg",
  "../assets/d2Java.jpg",
  "../assets/d1Python.jpg",
  '../assets/fullstack.jpg',
  '../assets/d6FronDev.jpg',
  '../assets/d7ReactPractico.jpg'

  ,
];
function mostrarDiploma(idImg) {
  if(idImg == null){
    return
  }
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
