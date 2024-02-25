import Swal from "sweetalert2";

const imgs = [
  require("../assets/d4Web.jpg"),
  require("../assets/d3Soft.jpg"),
  require("../assets/d2Java.jpg"),
  require("../assets/d1Python.jpg"),
  require('../assets/fullstack.jpg'),
  require('../assets/d6FronDev.jpg'),
  require('../assets/d7ReactPractico.jpg'),
];

function mostrarDiploma(idImg) {
  if (idImg === null) return;

  const imgElement = new Image();
  imgElement.src = imgs[idImg];
  imgElement.loading = 'lazy';

  Swal.fire({
    imageUrl: imgElement.src,
    image: imgElement,
    imageWidth: 1200,
    width: 600,
    imageHeight: 400,
    imageAlt: "Custom image",
  });
}

export default mostrarDiploma;
