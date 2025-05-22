import React, { useContext } from "react";
import ThemeToggle from "./ThemeToggle";
import { themes } from "@/App";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Help from "./Help";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const Navigate = useNavigate();
  const { theme, setTheme } = useContext(themes);

  return (
    <>
      <nav className="sticky top-0 flex justify-around items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 shadow-md">
        <h1 className="text-xl font-bold dark:text-white pointer" onClick={()=>Navigate('/')}>Blink Tac Toe</h1>
        <div className="flex gap-4 items-center">
          <Dialog>
            <DialogTrigger>Help</DialogTrigger>
            <DialogContent>
                <DialogTitle>How to Play</DialogTitle>
              <Help/>
            </DialogContent>
          </Dialog>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </>
  );
}
