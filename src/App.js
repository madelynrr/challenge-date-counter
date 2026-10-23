import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date().toDateString());

  function handleCountDecrease() {
    setCount((c) => c - step);
  }

  function handleCountIncrease() {
    setCount((c) => c + step);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        Count: {count}
        <button onClick={handleCountIncrease}>+</button>
      </div>
      <div>
        <div>Today is {date}</div>
      </div>
    </div>
  );
}
