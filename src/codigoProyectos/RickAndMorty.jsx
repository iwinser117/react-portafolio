import React from "react"
import rickFoto from "../assets/RickandMorty.png"
const RickAndMorty = () => {
  return (
    <div className="card m-auto w-50 p-4">
      <div>
        <h4 className="text-center">Web Rick and Morty</h4>
        <p>
          Sitio web estatico donde se consume la Api de Rick and Morty. y su
          intefaz esta realizada con React. <br />
          En este sitio hago uso de conocimientos adquiridos respecto al
          renderizado de elementos y el manejos de los datos obtenidos. <br />
          <a
            href="https://miapireact.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link de la pagina
          </a>
        </p>
      </div>
      <div>
        <img src={rickFoto} width="100%" alt="" />
      </div>
    </div>
  )
}

export default RickAndMorty
