import React, { useState, useEffect } from "react"
import "@styles/botons.css"
const BtnArriba = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      className="position-fixed bottom-0 end-0 btn btn-arriba"
      onClick={handleClick}
      style={{
        opacity: showButton ? 1 : 0,
        visibility: showButton ? "visible" : "hidden",
        transition: "opacity 0.3s, visibility 0.3s"
      }}
      aria-label="Volver arriba"
    >
      <i className="fa-regular fa-circle-up"></i>
    </button>
  )
}

export default BtnArriba
