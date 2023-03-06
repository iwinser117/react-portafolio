import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "@styles/formulario.css"
import formLogo from "@assets/formLogo.png"
import { exito, noEnviado, limpiarInput } from "../utils/sendForm"
const Fomulario = () => {
  //const [formData, setFormData] = useState({})
  const [viewForm, setViewForm] = useState(false)

  const verForm = () => {
    setViewForm(!viewForm)
  }
  /* const handleChange = (e) => {
    console.log(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  } */

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
      <section className="container col-8 fs-5 text-justify lh-lg">
        <h3 className="text-center" id="contactame">
          Contactame
        </h3>

        <div
        className="icono-formulario"
          title="Diligenciar formulario"
          onClick={() => verForm()}
        >
          <img
            src={formLogo}
            alt="logo formulario"
            width="32px"
          />
        </div>
        <form
          style={{ display: viewForm ? "block" : "none" }}
          ref={form}
          name="contact"
          action="post"
          data-netlify="true"
          onSubmit={sendEmail}
          className="container col-6 cont-Form"
        >
          <input type="hidden" name="form-name" value="contact"></input>
          <div className="mb-3 ">
            <label htmlFor="user_name" className="form-label">
              Nombre:
            </label>
            <input
              // onChange={(e) => handleChange(e)}
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
              // onChange={(e) => handleChange(e)}
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
              // onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              id="asunto"
              placeholder="Escribe una breve descripcion del motivo de contacto."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje:
            </label>
            <textarea
              name="message"
              // onChange={(e) => handleChange(e)}
              className="form-control"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success m-auto d-block">
            Enviar
          </button>
        </form>
      </section>
    </>
  )
}

export default Fomulario
