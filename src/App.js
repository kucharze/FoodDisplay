import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Food from "./pages/Food";
import Navbar from "./components/Navbar";
import Ingrediants from "./pages/Ingrediants";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/items" element={<Food />} />
        <Route path="/ingrediants/:item" element={<Ingrediants />} />
      </Routes>
    </div>
  );
}

export default App;
