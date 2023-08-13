// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../src/Navbar/Navbar";
import { Cliente } from "./Cliente";
import { Admin } from "./Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Cliente />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
