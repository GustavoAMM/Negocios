// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../src/Navbar/Navbar";
import { Cliente } from "./Cliente";
import { Admin } from "./Admin/Admin";
import { Dashboard } from "./Admin/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Cliente />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="dashboard" element={<Dashboard/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
