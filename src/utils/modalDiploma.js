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
    imageWidth: 600,  
    imageHeight: 400, 
    imageAlt: 'Diploma', 
    showCloseButton: true, 
    customClass: {
      popup: 'modal-content',
      image: 'modal-image' 
    },
    showConfirmButton: false, 
  });
}

export default mostrarDiploma;
