import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";


const VistaDiploma = () => {
  const [selectedId, setSelectedId] = useState(null);
  const handleClick = (event) => {
    setSelectedId(event.currentTarget.id);
  };
  useEffect(() => {
    console.log(selectedId);
    // Cualquier cosa que quieres hacer con selectedId aquí
  }, [selectedId]);
  return (
    <>
      <a href="#ViewCertficado" onClick={(e) => handleClick(e)}>
        <i className="fa-regular fa-eye"></i>
      </a>
    </>
  );
};

export default VistaDiploma;
