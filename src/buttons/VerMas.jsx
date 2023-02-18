import React, { useState } from "react";
import "@styles/home.css";


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
