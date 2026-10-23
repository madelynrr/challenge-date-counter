export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>Step:</div>
      <div>Count:</div>
      <div>days from today is</div>
    </div>
  );
}
