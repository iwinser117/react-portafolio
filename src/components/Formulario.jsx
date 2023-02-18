import React, { useState } from "react"
import "@styles/formulario.css"
const Swal = require("sweetalert2")
const Fomulario = () => {
  const [formData, setFormData] = useState({})
  const [viewForm, setViewForm] = useState(false)

  const verForm = () => {
    setViewForm(!viewForm)
  }
  const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.asunto) {
      Swal.fire({
        title: "Vaya! algo ha salido mal",
        text: "Por favor, rellene todos los campos",
        icon: "error",
      })
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mensaje enviado con exito",
        showConfirmButton: false,
        timer: 2000,
        text: "Pronto nos pondremos en contacto",
      })
    }
  }
  return (
    <>
      <section className="container col-8 fs-5 text-justify lh-lg">
        <h3 className="text-center" id="contactame">
          Contactame
        </h3>

        <div
          className="icono-formulario"
          title="Diligenciar formulario"
          onClick={() => verForm()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-article"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M7 8h10"></path>
            <path d="M7 12h10"></path>
            <path d="M7 16h10"></path>
          </svg>
        </div>
        <form
          style={{ display: viewForm ? "block" : "none" }}
          name="contact"
          action="post"
          data-netlify="true"
          className="container col-6 cont-Form"
        >
          <input type="hidden" name="form-name" value="contact"></input>
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
          <button
            onSubmit={(e) => handleSubmit(e)}
            type="submit"
            className="btn btn-success m-auto d-block"
          >
            Enviar
          </button>
        </form>
      </section>
      <div style={{ display: "none" }}>
        <form name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <p>
            <label>
              Name <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </>
  )
}

export default Fomulario
