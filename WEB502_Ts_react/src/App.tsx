import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <> 
    {/* // Truyền màu cố định */}
      <Button text="Submit" color="#1E90FF" />

    {/* // Không truyền -> click đổi random hex */}
      <Button text="Random Color" />

    </>
  );
}

export default App;
