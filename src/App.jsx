/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";
import "../src/App.css";
// import Header from "./components/Header";
// import Board from "./components/Board";
// import { emojiCategories } from "./assets/emojis";
import { Navbar } from "./components/Navbar";
import { GameSelection } from "./pages/GameSelection";
import { Route, Routes } from "react-router-dom";
import { Multiplayer } from "./pages/MultiPlayer";
import { SinglePlayer } from "./pages/SinglePlayer";

export const themes = createContext()
export default function App() {
  // const [player1Category, setPlayer1Category] = useState("Animals");
  // const [player2Category, setPlayer2Category] = useState("Food");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const [winner, setWinner] = useState(null);

  // const resetGame = () => {
  //   setWinner(null);
  // };

  return (
    <themes.Provider value={{ theme, setTheme }}>
      <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<GameSelection />} />
      <Route path="/computer" element={<SinglePlayer />} />
      <Route path="/multi" element={<Multiplayer />} />
    </Routes>
    </>
    </themes.Provider>
    
  );
}
