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
import css_extint from "@assets/css_extint.webp";
import rickandmorty from "@assets/rickandmorty.png";
import odontoweb from "@assets/odontoweb.webp";
import imgdevist from "@assets/imgdevist.webp";
import imgtablaExport from "@assets/imgtablaExport.png";
import login from "@assets/login.webp";
import fondocss from "@assets/fondocss.png";
import semanticpage from "@assets/semanticpage.png";
import galeryart from "@assets/galeryart.png";

const imagesData = [
  { src: js, alt: 'Login con JS' },
  { src: node, alt: 'CRUD Lista tareas' },
  { src: css, alt: 'Input colors' },
  { src: html, alt: 'HTML' },
  { src: react, alt: 'Contador' },
  { src: js, alt: 'Calculadora' },
];

// Section1: Proyectos JavaScript
const section1Projects = [
  { 
    src: rickandmorty, 
    alt: 'Rick and Morty', 
    subtitle: 'Consumo API - Paginación',
    demo: 'https://api-rick-and-morty-17j9.vercel.app/',
    repo: 'https://github.com/iwinser117/Api-Rick-and-Morty'
  },
];

// Section2: Proyectos Node.js
const section2Projects = [
  { 
    src: odontoweb, 
    alt: 'OdontoWeb', 
    subtitle: 'Node.js - Express - Bootstrap',
    demo: 'https://odonto-web-red.vercel.app/',
    repo: 'https://github.com/iwinser117/odonto_web'
  },
  { 
    src: imgdevist, 
    alt: 'Reservas D´visita', 
    subtitle: 'Node.js - Express - Vercel',
    demo: 'https://reservas-eta.vercel.app/',
    repo: 'https://github.com/iwinser117/reservas'
  },
  { 
    src: login, 
    alt: 'Autenticación JWT', 
    subtitle: 'Node.js - JWT - Express',
    demo: 'https://autenticate.vercel.app/',
    repo: 'https://github.com/iwinser117/autenticate'
  },
  { 
    src: generatePassword, 
    alt: 'Generador Contraseñas', 
    subtitle: 'Tailwind - NextJs',
    demo: 'https://generatepassword-theta.vercel.app/',
    repo: 'https://github.com/iwinser117/generatepassword'
  },
  { 
    src: imgtablaExport, 
    alt: 'TableExportJS', 
    subtitle: 'Vanilla JS - CSV - XLSX',
    demo: 'https://table-export-js-4zq5.vercel.app/',
    repo: 'https://github.com/iwinser117/TableExportJS'
  },
];

// Section3: Proyectos CSS
const section3Projects = [
  { 
    src: css_extint, 
    alt: 'Sitio Extintores', 
    subtitle: 'React - CSS - Tailwind',
    demo: 'https://fire-extinguishers.vercel.app/',
    repo: 'https://github.com/iwinser117/fireExtinguishers'
  },
  { 
    src: galeryart, 
    alt: 'Galería de Arte', 
    subtitle: 'HTML - CSS - Lightbox',
    demo: 'https://galery-art-rho.vercel.app/',
    repo: 'https://github.com/iwinser117/galery_art'
  },
  { 
    src: fondocss, 
    alt: 'Animación Background', 
    subtitle: 'CSS - Animations - Responsive',
    demo: 'https://iwinser117.github.io/https---github.com-iwinser117-css_background/',
    repo: 'https://github.com/iwinser117/css_background'
  },
  { 
    src: semanticpage, 
    alt: 'Plantilla Responsive', 
    subtitle: 'HTML - CSS - Responsive',
    demo: 'https://responsivetemplatecss.netlify.app/',
    repo: 'https://github.com/iwinser117/responsivetemplate'
  },
];

// Proyectos destacados para la página de aplicaciones
const secondImages = [
  { 
    src: odontoweb, 
    alt: 'Odonto web', 
    subtitle: 'React Next UI',
    demo: 'https://odonto-web-red.vercel.app/',
    repo: 'https://github.com/iwinser117/odonto_web'
  },
  { 
    src: css_extint, 
    alt: 'Sitio extintores', 
    subtitle: 'React - Css - Tailwind - Landing Page',
    demo: 'https://fire-extinguishers.vercel.app/',
    repo: 'https://github.com/iwinser117/fireExtinguishers'
  },
  { 
    src: listtareas, 
    alt: 'CRUD Lista tareas', 
    subtitle: 'NodeJs - React - MongoDB',
    demo: 'https://crudlistatareas.netlify.app/',
    repo: 'https://github.com/iwinser117/nodeJs_react_crud'
  },
  { 
    src: login, 
    alt: 'Autenticación JWT', 
    subtitle: 'NodeJs - ExpressJs - oAuth',
    demo: 'https://autenticate.vercel.app/',
    repo: 'https://github.com/iwinser117/autenticate'
  },
  { 
    src: generatePassword, 
    alt: 'Generador Contraseñas', 
    subtitle: 'Tailwind - NextJs',
    demo: 'https://generatepassword-theta.vercel.app/',
    repo: 'https://github.com/iwinser117/generatepassword'
  },
  { 
    src: imgtablaExport, 
    alt: 'TableExportJS', 
    subtitle: 'NodeJs',
    demo: 'https://table-export-js-4zq5.vercel.app/',
    repo: 'https://github.com/iwinser117/TableExportJS'
  },
  {
    src: imgdevist,
    alt: 'Reservas D´visita', 
    subtitle: 'landing Page - NodeJs',
    demo: 'https://reservas-eta.vercel.app/',
    repo: 'https://github.com/iwinser117/reservas'
  }
];

const imagesTodowebp = {
  calcu: calcu,
  contador: contador,
  listtareas: listtareas,
  imgPaletaColores: imgPaletaColores,
  cimgtablaExport: cimgtablaExport,
  loginImg: loginImg,
  relojimg: relojimg,
  generatePassword: generatePassword,
  rickandmorty: rickandmorty
};
export { imagesData, secondImages, imagesTodowebp, section1Projects, section2Projects, section3Projects }; 
