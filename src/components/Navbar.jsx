import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { themes } from "@/App";
import Help from "./Help";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const Navigate = useNavigate();
  const { theme, setTheme } = useContext(themes);

  return (
    <>
      <nav className="fixed w-full z-9 top-0 flex justify-around items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 shadow-md">
        <h1
          className="text-3xl font-bold dark:text-white pointer"
          onClick={() => Navigate("/")}
        >
          Blink Tac Toe
        </h1>
        <div className="flex gap-4 items-center">
          <Help/>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </>
  );
}
