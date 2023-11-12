import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Reloj = ({ onClose }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("America/Bogota");
  const [cityData, setCityData] = useState(null);

  const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const cities = [
    { name: "Seleccione una ciudad", timezone: "" },
    { name: "Nueva York", timezone: "America/New_York" },
    { name: "Los Ángeles", timezone: "America/Los_Angeles" },
    { name: "Toronto", timezone: "America/Toronto" },
    { name: "Londres", timezone: "Europe/London" },
    { name: "París", timezone: "Europe/Paris" },
    { name: "Berlín", timezone: "Europe/Berlin" },
    { name: "Roma", timezone: "Europe/Rome" },
    { name: "Tokio", timezone: "Asia/Tokyo" },
    { name: "Pekín", timezone: "Asia/Shanghai" },
    { name: "Sídney", timezone: "Australia/Sydney" },
    { name: "Moscú", timezone: "Europe/Moscow" },
    { name: "Ciudad del Cabo", timezone: "Africa/Johannesburg" },
    { name: "Santiago", timezone: "America/Santiago" },
    { name: "Bogotá", timezone: "America/Bogota" },
    { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires" },
  ];
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const cityTime = new Date(
        now.toLocaleString("en-US", { timeZone: selectedCity })
      ).toLocaleTimeString();
      const cityDate = new Date(
        now.toLocaleString("en-US", { timeZone: selectedCity })
      );
      setTime(cityTime);
      setDate(
        `${diasSemana[cityDate.getUTCDay()]} ${cityDate.getDate()} de ${
          months[cityDate.getMonth()]
        } de ${cityDate.getFullYear()}`
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedCity, months]);

  const [staticModal, setStaticModal] = useState(true);

  const handleShow = () => {
    setStaticModal(true);
  };

  const handleClose = () => {
    onClose()
  };

  return (
    <Modal show={staticModal} onHide={handleClose} size="" centered>
      <Modal.Header closeButton>
        <Modal.Title>Reloj Mundial</Modal.Title>
      </Modal.Header>
      <div className="card m-auto w-50 p-4 bg-dark text-white text-justify">
        <h4 className="text-center">Reloj Mundial</h4>
        <p>Seleccione una ciudad para ver la hora y fecha correspondiente:</p>
        <div className="d-flex justify-content-center mb-3">
          <select
            className="form-select"
            value={selectedCity}
            onChange={handleCityChange}
          >
            {cities.map((city) => (
              <option key={city.timezone} value={city.timezone}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="card-body text-center">
          <h4>{time}</h4>
          <h6>{date}</h6>
        </div>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Reloj;