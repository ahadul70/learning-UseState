import React, { useState, useEffect } from "react";

const ToggleButton = () => {
  const [on, setOn] = useState(true);

  const handleChange = () => {
    setOn(!on); 
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "o" || event.key === "O") {
        setOn(true);
      } else if (event.key === "f" || event.key === "F") {
        setOn(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 

  return (
    <div>
      ToggleButton
      <button onClick={handleChange}>
        {on ? "ON" : "OFF"} {/* Conditional rendering of button text */}
      </button>
    </div>
  );
};

export default ToggleButton;
