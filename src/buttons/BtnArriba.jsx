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
    <div className="scroll-to-top-container">
      <button
        className={`scroll-to-top-btn ${showButton ? 'show' : ''}`}
        onClick={handleClick}
        aria-label="Volver arriba"
      >
        <div className="btn-content">
          <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L12 20M12 4L6 10M12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="ripple-effect"></div>
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default BtnArriba
