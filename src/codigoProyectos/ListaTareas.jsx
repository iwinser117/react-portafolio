import React from "react";

const ListaTareas = () => {
  return (
    <>
      <div className="card m-auto w-50 p-4 bg-dark text-white">
        <h4 className="text-center">Lista de tareas</h4>
        <p>
          Esta es una Aplicacion que su Backend se Encuentra desplegada en Azure
          y su Frontend en Netlify. Posee las Caracteristicas de CRUD (Create,
          Read, Update, Delete) y fue desarrollada con NodeJs, Express, React y
          MongoDB (MERN). <br />
          <a
            href="https://crudlistatareas.netlify.app "
            target="_blank"
            rel="noopener noreferrer"
          >Link de Visita al Crud</a>
        </p>
        <div className="m-auto">
          <video
            src="../assets/CrudTareas.mp4"
            controls
            width="320"
            height="240"
          >
            Tu navegador no soporta el elemento de video
          </video>
        </div>
      </div>
    </>
  );
};

export default ListaTareas;
