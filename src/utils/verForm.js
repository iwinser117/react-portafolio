import React, { useState } from "react";

// Función verForm
export const verForm = (viewForm, setViewForm) => {
  setViewForm(!viewForm);
};

const Fomulario = () => {
  const [viewForm, setViewForm] = useState(false);
};

export default Fomulario;
