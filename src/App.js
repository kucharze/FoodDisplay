import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Food from "./pages/Food";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/items" element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
