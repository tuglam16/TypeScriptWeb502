import React from "react";
import Button from "./components/Button";
import MyUseState from "./components/MyUseState";

function App() {
  return (
    <> 
      {/* <Button text="Submit" color="#4a6e93ff" /> */}

      {/* // Không truyền -> click đổi random hex */}
      {/* <Button text="Random Color" /> */}
    <MyUseState/>
    </>
  );
}

export default App;
