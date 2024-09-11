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
      className="position-fixed bottom-0 end-0 translate-middle translate-middle btn  btn-arriba"
      onClick={() => handleClick()}
      style={{ display: showButton ? "block" : "none" }}
    >
      <i className="fa-regular fa-circle-up"></i>
    </button>
  )
}

export default BtnArriba
