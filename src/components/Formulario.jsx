import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "@styles/formulario.css"
import formLogo from "@assets/formLogo.png"
import formLogo2 from "@assets/close-form.png"
import { exito, noEnviado, limpiarInput } from "../utils/sendForm"
const Fomulario = () => {
  //const [formData, setFormData] = useState({})
  const [viewForm, setViewForm] = useState(true)

  const verForm = () => {
    setViewForm(!viewForm)
  }

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_uiwikh8",
        "template_40uel95",
        form.current,
        "tvVn2ElRQmSkAAMc2"
      )
      .then(
        (result) => {
          limpiarInput()
        },
        (error) => {
          noEnviado()
        }
      )
      .then((result) => {
        exito()
      })
  }
  return (
    <>
      <section className="container form-cnt col-8 fs-5 text-justify lh-lg pt-3">
        <h3 className="text-center" id="contactame">
          Contactame
        </h3>
        <p className="text-form">{viewForm ? "" : "Diligenciar formulario"}</p>
        <div
          className="icono-formulario"
          title={viewForm ? "Cerrar formulario" : "Diligenciar formulario"}
          onClick={() => verForm()}
        >
          {viewForm ? (
            <img src={formLogo2} alt="logo formulario" width="32px" />
          ) : (
            <img src={formLogo} alt="logo formulario" width="32px" className="mb-4" />
          )}
        </div>
        <form
          ref={form}
          name="contact"
          action="post"
          data-netlify="true"
          onSubmit={sendEmail}
          id='form-contact'
          className={
            viewForm
              ? "block-view container col-6 traslation mb-4"
              : "none-view container col-6"
          }
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="mb-3 ">
            <label htmlFor="user_name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              placeholder="escribe tu nombre"
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="user_email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
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
              type="text"
              className="form-control"
              id="asunto"
              placeholder="Escribe una breve descripción del motivo de contacto."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje:
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn m-auto d-block color-letra  btn-primary">
            Enviar
          </button>
        </form>
      </section>
    </>
  )
}

export default Fomulario
