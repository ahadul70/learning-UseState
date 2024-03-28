import React, { useState } from "react";

const NumberCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleAdd = () => {
    setCounter((prev) => prev + 1);
    };
  const handleSub = () => {
    setCounter((prev) => prev - 1);
    };
    
  return (
    <div>
      NumberCounter
      <input value={counter} type="text" />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
};

export default NumberCounter;
