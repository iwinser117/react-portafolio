import React, { useState } from "react";
import "../styles/home.css";
import { Button } from "react-bootstrap";


const  SeeMoreButton = ()=> {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      
    </div>
  );
}

export default SeeMoreButton;
