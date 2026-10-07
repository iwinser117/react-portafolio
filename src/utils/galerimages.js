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
import crud_sap from "@assets/CRUDSAP.webp";

const imagesData = [{
    src: js,
    alt: 'Login con JS'
  },
  {
    src: node,
    alt: 'Maestro de Datos '
  },
  {
    src: css,
    alt: 'Input colors'
  },
  {
    src: html,
    alt: 'HTML'
  },
  {
    src: react,
    alt: 'Contador'
  },
  {
    src: js,
    alt: 'Calculadora'
  },
];

// Section1: Proyectos JavaScript
const section1Projects = [{
  src: rickandmorty,
  alt: 'Rick and Morty',
  subtitle: 'Consumo API - Paginación',
  demo: 'https://api-rick-and-morty-17j9.vercel.app/',
  repo: 'https://github.com/iwinser117/Api-Rick-and-Morty',
  description: 'Aplicación que consume la API de Rick and Morty y muestra los personajes con paginación.'
}, ];

// Section2: Proyectos Node.js
const section2Projects = [
  /*  { 
     src: odontoweb, 
     alt: 'OdontoWeb', 
     subtitle: 'Node.js - Express - Bootstrap',
     demo: 'https://odonto-web-red.vercel.app/',
     repo: 'https://github.com/iwinser117/odonto_web'
   }, */
  /* { 
    src: imgdevist, 
    alt: 'Reservas D´visita', 
    subtitle: 'Node.js - Express - Vercel',
    demo: 'https://reservas-eta.vercel.app/',
    repo: 'https://github.com/iwinser117/reservas'
  }, */
  {
    src: login,
    alt: 'Autenticación basada en Tokens',
    subtitle: 'Node.js - JWT - Express',
    demo: 'https://autenticate.vercel.app/',
    repo: 'https://github.com/iwinser117/autenticate',
    description: 'Implementación de login con JSON Web Tokens. Incluye rutas para autenticar usuarios, crear usuarios y manejo de sesiones.'
  },
  {
    src: generatePassword,
    alt: 'Creador de Claves Seguras',
    subtitle: 'Tailwind - NextJs',
    demo: 'https://generatepassword-theta.vercel.app/',
    repo: 'https://github.com/iwinser117/generatepassword',
    description: 'Crea contraseñas seguras con parámetros personalizables.'
  },
  {
    src: imgtablaExport,
    alt: 'Centro de Exportación de Datos',
    subtitle: 'Vanilla JS - CSV - XLSX',
    demo: 'https://table-export-js-4zq5.vercel.app/',
    repo: 'https://github.com/iwinser117/TableExportJS',
    description: 'Herramienta para exportar tablas en diversos formatos. Fuente de datos dinamica.'
  },
];

// Section3: Proyectos CSS
const section3Projects = [
  // { 
  //   src: css_extint, 
  //   alt: 'Sitio Extintores', 
  //   subtitle: 'React - CSS - Tailwind',
  //   demo: 'https://fire-extinguishers.vercel.app/',
  //   repo: 'https://github.com/iwinser117/fireExtinguishers'
  // },
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
  /* { 
    src: odontoweb, 
    alt: 'Odonto web', 
    subtitle: 'React Next UI',
    demo: 'https://odonto-web-red.vercel.app/',
    repo: 'https://github.com/iwinser117/odonto_web'
  }, */
  /*  { 
     src: css_extint, 
     alt: 'Sitio extintores', 
     subtitle: 'React - Css - Tailwind - Landing Page',
     demo: 'https://fire-extinguishers.vercel.app/',
     repo: 'https://github.com/iwinser117/fireExtinguishers'
   }, */
  {
    src: listtareas,
    alt: 'Maestro de Datos ',
    subtitle: 'NodeJs - React - MongoDB',
    demo: 'https://crudlistatareas.netlify.app/',
    repo: 'https://github.com/iwinser117/nodeJs_react_crud',
    description: 'Aplicación para gestionar tareas con un backend en Node.js y un frontend en React. Incluye operaciones CRUD y almacenamiento en MongoDB.'
  },
  {
    src: login,
    alt: 'Autenticación basada en Tokens',
    subtitle: 'NodeJs - ExpressJs - oAuth',
    demo: 'https://autenticate.vercel.app/',
    repo: 'https://github.com/iwinser117/autenticate',
    description: 'Implementación de login con JSON Web Tokens. Incluye rutas para autenticar usuarios, crear usuarios y manejo de sesiones.'
  },
  {
    src: generatePassword,
    alt: 'Creador de Claves Seguras',
    subtitle: 'Tailwind - NextJs',
    demo: 'https://generatepassword-theta.vercel.app/',
    repo: 'https://github.com/iwinser117/generatepassword',
    description: 'Crea contraseñas seguras con parámetros personalizables.'
  },
  {
    src: imgtablaExport,
    alt: 'Centro de Exportación de Datos',
    subtitle: 'NodeJs',
    demo: 'https://table-export-js-4zq5.vercel.app/',
    repo: 'https://github.com/iwinser117/TableExportJS',
    description: 'Herramienta para exportar tablas en diversos formatos. Fuente de datos dinamica.'
  },
  {
    src: crud_sap,
    alt: 'Gestor de Datos Maestros',
    subtitle: 'NodeJs - Express - Odata - SAP',
    demo: 'https://mega-crud-table-ui5.vercel.app/',
    repo: 'https://github.com/iwinser117/mega-crud-table-ui5',
    description: 'Aplicación para gestionar datos maestros desde SAP mediante OData.'
  },
  /* {
    src: imgdevist,
    alt: 'Reservas D´visita', 
    subtitle: 'landing Page - NodeJs',
    demo: 'https://reservas-eta.vercel.app/',
    repo: 'https://github.com/iwinser117/reservas'
  } */
  {
    src: "",
    alt: "apk pdf",
    subtitle: "Visor PDF - Android",
    description: "Estaba cansado de la publicidad y escribir contraseñas asi que hice esta aplicación para visualizar archivos PDF en dispositivos Android.",
    demo: "https://pdf-generator-nodejs.vercel.app/",
    repo: "https://github.com/iwinser117/pdf_reader"
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
export {
  imagesData,
  secondImages,
  imagesTodowebp,
  section1Projects,
  section2Projects,
  section3Projects
};