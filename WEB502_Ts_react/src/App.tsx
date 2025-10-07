// import React from "react";
// import Button from "./components/Button";
// import MyUseState from "./components/MyUseState";
import { Route, Router, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Users from "./components/Users";

function App() {
  return (
    <> 
      {/* <Button text="Submit" color="#4a6e93ff" />
      <Button text="Random Color" />
    <MyUseState/> */}

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/useeffect" element={<Users />} />
      </Routes>

    </>
  );
}

export default App;
