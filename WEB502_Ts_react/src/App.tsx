import React from "react";
import ColorButton from "./components/Button";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Giữ nguyên màu*/}
      <ColorButton label="Button" color="pink" />

      {/* Random màu khi click */}
      <ColorButton label="Random Button" />

      {/* Random màu + có callback */}
      <ColorButton 
        label="Click Me" 
        onClick={() => alert("Button clicked!")} 
      />
    </div>
  );
}

export default App;
