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
      <div>
        <button>-</button>
        Step:
        <button>+</button>
      </div>
      <div>
        <button>-</button>
        Count:
        <button>+</button>
      </div>
      <div>days from today is</div>
    </div>
  );
}
