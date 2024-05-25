// imagesData.js
import js from '@assets/logojavascript.svg';
import node from '@assets/nodejs.svg';
import css from '@assets/css.svg';
import html from '@assets/html.svg';
import react from '@assets/react.svg';
import loginImg from '@assets/login.webp';
import contador from '@assets/contador.webp';
import cimgtablaExport from '@assets/cimgtablaExport.webp';
import listtareas from '@assets/listtareas.webp';
import imgPaletaColores from '@assets/imgPaletaColores.webp';
import calcu from '@assets/calcu.webp';
import relojimg from '@assets/relojimg.webp';
import generatePassword from '@assets/generatePassword.webp';


const imagesData = [
  { src: js, alt: 'Login con JS' },
  { src: node, alt: 'CRUD Lista tareas' },
  { src: css, alt: 'Input colors' },
  { src: html, alt: 'HTML' },
  { src: react, alt: 'Contador' },
  { src: js, alt: 'Calculadora' },
];

const secondImages = [
  { src: loginImg, alt: 'Login con JS' },
  { src: listtareas, alt: 'CRUD Lista tareas' },
  { src: imgPaletaColores, alt: 'Input colors' },
  { src: cimgtablaExport, alt: 'Node Js Export' },
  { src: contador, alt: 'State React' },
  { src: calcu, alt: 'Calculadora Js vanilla' },
];

  const imagesTodowebp = {
    calcu: calcu,
    contador: contador,
    listtareas: listtareas,
    imgPaletaColores: imgPaletaColores,
    cimgtablaExport: cimgtablaExport,
    loginImg: loginImg,
    relojimg: relojimg,
    generatePassword: generatePassword
  };
export { imagesData, secondImages, imagesTodowebp }; 
