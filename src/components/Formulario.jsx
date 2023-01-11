import React from "react";
import { sendForm } from "../utils/sendForm";

const Fomulario = () => {
  return (
    <>
      <section className="container col-8 fs-5 text-justify lh-lg">
        <h3 className="text-center" id="contactame">Contactame</h3>
        <form className="container col-6">
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="escribe tu nombre"
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Asunto:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Escribe una breve descripcion del motivo de contacto."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Descripcion
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-success m-auto d-block"
            onClick={() => sendForm()}
          >
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default Fomulario;
