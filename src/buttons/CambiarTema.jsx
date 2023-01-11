import React, { useState } from "react";

const CambiarTema = () => {
 const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Change theme
    </button>
  );
};

export default CambiarTema;
