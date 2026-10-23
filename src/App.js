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
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        Count: {count}
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
      <div>days from today is</div>
    </div>
  );
}
