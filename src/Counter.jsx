import React from "react";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button onClick={() => setNumber((number) => number + 1)}>
        increase
      </button>
      <button onClick={() => setNumber(0)}>zero</button>
      <button onClick={() => setNumber((number) => number - 1)}>
        decrease
      </button>

      <div>{number}</div>
    </div>
  );
};

export default Counter;
