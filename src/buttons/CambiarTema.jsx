import React, { useState } from "react";

const CambiarTema = () => {

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Change theme
    </button>
  );
};

export default CambiarTema;
