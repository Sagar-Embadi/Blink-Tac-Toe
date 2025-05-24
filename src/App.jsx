/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import "../src/App.css";
import { Navbar } from "./components/Navbar";
import { GameSelection } from "./pages/GameSelection";
import { Route, Routes } from "react-router-dom";
import { Multiplayer } from "./pages/MultiPlayer";
import SinglePlayerGame from "./pages/SinglePlayerGame";

export const themes = createContext()
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <themes.Provider value={{ theme, setTheme }}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<GameSelection />} />
      <Route path="/computer" element={<SinglePlayerGame />} />
      <Route path="/multi" element={<Multiplayer />} />
    </Routes>
    </themes.Provider>
    
  );
}
