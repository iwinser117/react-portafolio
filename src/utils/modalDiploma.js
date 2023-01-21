const Swal = require("sweetalert2");
const imgs = [
  "../assets/certificados/d4Web.jpg",
  "../assets/certificados/d3Soft.jpg",
  "../assets/certificados/d2Java.jpg",
  "../assets/certificados/d1Python.jpg",
  '../assets/certificados/d5JsPrac.jpg',
  '../assets/certificados/d6FronDev.jpg',
  '../assets/certificados/d7ReactPractico.jpg'

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
