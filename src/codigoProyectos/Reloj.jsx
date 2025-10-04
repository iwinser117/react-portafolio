import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Reloj = ({ onClose }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("America/Bogota");

  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

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
    { name: "Nueva York", timezone: "America/New_York", flag: "🇺🇸" },
    { name: "Los Ángeles", timezone: "America/Los_Angeles", flag: "🇺🇸" },
    { name: "Toronto", timezone: "America/Toronto", flag: "🇨🇦" },
    { name: "Londres", timezone: "Europe/London", flag: "🇬🇧" },
    { name: "París", timezone: "Europe/Paris", flag: "🇫🇷" },
    { name: "Berlín", timezone: "Europe/Berlin", flag: "🇩🇪" },
    { name: "Roma", timezone: "Europe/Rome", flag: "🇮🇹" },
    { name: "Tokio", timezone: "Asia/Tokyo", flag: "🇯🇵" },
    { name: "Pekín", timezone: "Asia/Shanghai", flag: "🇨🇳" },
    { name: "Sídney", timezone: "Australia/Sydney", flag: "🇦🇺" },
    { name: "Moscú", timezone: "Europe/Moscow", flag: "🇷🇺" },
    { name: "Ciudad del Cabo", timezone: "Africa/Johannesburg", flag: "🇿🇦" },
    { name: "Santiago", timezone: "America/Santiago", flag: "🇨🇱" },
    { name: "Bogotá", timezone: "America/Bogota", flag: "🇨🇴" },
    { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", flag: "🇦🇷" },
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
  }, [selectedCity]);

  const [staticModal, setStaticModal] = useState(true);

  const handleClose = () => {
    onClose();
  };

  return (
    <Modal 
      show={staticModal} 
      onHide={handleClose} 
      centered 
      size="lg"
    >
      <Modal.Header
        closeButton
        style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: 'none',
          padding: '24px'
        }}
      >
        <Modal.Title className="w-100 text-center fw-bold text-white" style={{ fontSize: '1.5rem' }}>
          🌍 Reloj Mundial
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ 
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        padding: '40px 20px'
      }}>
        <div className="text-center mb-4">
          <p className="text-white mb-3" style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            Seleccione una ciudad para ver la hora local
          </p>

          <div className="d-flex justify-content-center mb-4">
            <select
              className="form-select shadow-lg"
              value={selectedCity}
              onChange={handleCityChange}
              style={{
                width: '80%',
                maxWidth: '400px',
                padding: '12px 16px',
                fontSize: '1rem',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.95)',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {cities.map((city) => (
                <option key={city.timezone} value={city.timezone}>
                  {city.flag ? `${city.flag} ${city.name}` : city.name}
                </option>
              ))}
            </select>
          </div>

          <div 
            className="mx-auto p-4 rounded-4 shadow-lg" 
            style={{
              maxWidth: '500px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="mb-3">
              <h1 
                className="display-1 fw-bold text-white mb-0" 
                style={{ 
                  fontSize: '4rem',
                  textShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  fontFamily: 'monospace',
                  letterSpacing: '2px'
                }}
              >
                {time}
              </h1>
            </div>
            
            <div 
              className="px-4 py-2 rounded-3 d-inline-block"
              style={{
                background: 'rgba(100, 255, 218, 0.2)',
                border: '1px solid rgba(100, 255, 218, 0.3)'
              }}
            >
              <h5 
                className="mb-0 text-white fw-semibold" 
                style={{ fontSize: '1.2rem', opacity: 0.95 }}
              >
                {date}
              </h5>
            </div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer 
        className="d-flex justify-content-center" 
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: 'none',
          padding: '20px'
        }}
      >
        <Button 
          variant="light" 
          className="px-5 py-2 fw-semibold shadow" 
          onClick={handleClose}
          style={{
            borderRadius: '10px',
            fontSize: '1rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}
        >
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Reloj;