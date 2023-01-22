import React, { useState } from "react";
const Swal = require("sweetalert2");
const Fomulario = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.asunto) {
      Swal.fire({
        title: "Vaya! algo ha salido mal",
        text: "Por favor, rellene todos los campos",
        icon: "error",
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensaje enviado con exito",
        showConfirmButton: false,
        timer: 2000,
        text: "Pronto nos pondremos en contacto",
      });
    }
  };
  return (
    <>
      <section className="container col-8 fs-5 text-justify lh-lg">
        <h3 className="text-center" id="contactame">
          Contactame
        </h3>
        <form
          method="post"
          name="formulario-portafolio"
          netlify
          className="container col-6"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="escribe tu nombre"
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="asunto" className="form-label">
              Asunto:
            </label>
            <input
              name="asunto"
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="asunto"
              placeholder="Escribe una breve descripcion del motivo de contacto."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripcion
            </label>
            <textarea
              name="descripcion"
              onChange={(e) => handleChange(e)}
              className="form-control"
              id="descripcion"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success m-auto d-block">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Fomulario;
