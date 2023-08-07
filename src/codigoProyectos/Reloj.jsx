import React, { useState, useEffect, useRef } from "react";
const Reloj = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("America/Bogota");
  const [cityData, setCityData] = useState(null);
  
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
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
  
  const fetchCityData = async (timezone) => {
    try {
      const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching city data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAndSetCityTime = async () => {
      const data = await fetchCityData(selectedCity);
      if (data) {
        const cityTime = new Date(data.utc_datetime).toLocaleTimeString();
        setTime(cityTime);
        setDate(`${data.day} de ${months[data.month - 1]} de ${data.year}`);
      }
    };

    fetchAndSetCityTime();

    const intervalId = setInterval(() => {
      const now = new Date();
      const cityTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000)).toLocaleTimeString();
      setTime(cityTime);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedCity]);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="card m-auto w-50 p-4 bg-dark text-white">
      <h4 className="text-center">Reloj Mundial</h4>
      <p>
        Seleccione una ciudad para ver la hora y fecha correspondiente:
      </p>
      <div className="d-flex justify-content-center mb-3">
        <select className="form-select" value={selectedCity} onChange={handleCityChange}>
          {cities.map((city) => (
            <option key={city.name} value={city.timezone}>
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
  );
};

export default Reloj;