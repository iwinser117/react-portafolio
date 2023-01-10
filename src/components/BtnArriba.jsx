import React, { useState, useEffect } from "react";

const BtnArriba = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };
  return (
    <div>{showButton && <button>Click me!</button>}</div>
    // <button
    //   onClick={scrollToTop}
    //   id="topButton"
    //   title="Volver al inicio"
    //   className="btn btn-primary position-fixed bottom-0 end-0 translate-middle-x translate-middle-y"
    // >
    //   Volver arriba
    // </button>
  );
};

export default BtnArriba;
