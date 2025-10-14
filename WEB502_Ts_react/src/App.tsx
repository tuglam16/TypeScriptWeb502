// import React from "react";
// import Button from "./components/Button";
// import MyUseState from "./components/MyUseState";
import { Route, Router, Routes } from "react-router-dom";
// import ProductList from "./pages/ProductList";
// import ProductDetail from "./pages/ProductDetail";
import Users from "./components/Users";
import { Toaster } from "react-hot-toast";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import List from "./pages/List";
import AdminLayout from "./layout/AdminLayout";
import Home from "./pages/Home";
import ClientLayout from "./layout/ClientLayout";
import ProductList from "./pages/ProductList";


function App() {
  return (
    <> 
      {/* <Button text="Submit" color="#4a6e93ff" />
      <Button text="Random Color" />
    <MyUseState/> */}

     <Routes>
        {/* Client Layout */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductList />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="list" element={<List />}></Route>
          <Route path="add" element={<Add />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
