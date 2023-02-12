import React, { useState, useEffect } from "react"

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
      className="text-warning position-fixed bottom-0 end-0 translate-middle translate-middle btn btn-primary"
      onClick={() => handleClick()}
      style={{ display: showButton ? "block" : "none" }}
    >
      <i className="fa-regular fa-circle-up"></i>
    </button>
  )
}

export default BtnArriba
