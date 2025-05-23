import React, { useEffect, useState } from "react";
import { emojiCategories } from "../assets/emojis";
import Board from "../components/Board";
import { Button } from "@/components/ui/button";
// import { themes } from '@/App';

const getRandomFromCategory = (category) => {
  const items = emojiCategories[category];
  return items[Math.floor(Math.random() * items.length)];
};

export function SinglePlayer() {
  //   const { theme } = useContext(themes);
  const [playerCategory, setPlayerCategory] = useState(null);
  const [computerCategory, setComputerCategory] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerMoves, setPlayerMoves] = useState([]);
  const [computerMoves, setComputerMoves] = useState([]);
  const [currentTurn, setCurrentTurn] = useState("player");
  const [winner, setWinner] = useState(null);

  const checkWin = (moves) => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of combos) {
      const [a, b, c] = combo;
      if (moves.includes(a) && moves.includes(b) && moves.includes(c))
        return true;
    }
    return false;
  };

  const placeEmoji = (index, emoji) => {
    const newBoard = [...board];
    newBoard[index] = emoji;
    setBoard(newBoard);
  };

  const computerPlay = () => {
    const available = board
      .map((v, i) => (v === null ? i : null))
      .filter((v) => v !== null);
    if (available.length === 0) return;
    const index = available[Math.floor(Math.random() * available.length)];
    const emoji = getRandomFromCategory(computerCategory);
    const updated = [...computerMoves, index];

    if (updated.length > 3) {
      const removed = updated.shift();
      board[removed] = null;
    }

    placeEmoji(index, emoji);
    setComputerMoves(updated);

    if (checkWin(updated)) {
      setWinner("Computer Wins!");
    } else {
      setCurrentTurn("player");
    }
  };

  const handleCellClick = (i) => {
    if (winner || board[i] || currentTurn !== "player") return;

    const emoji = getRandomFromCategory(playerCategory);
    const updated = [...playerMoves, i];

    if (updated.length > 3) {
      const removed = updated.shift();
      board[removed] = null;
    }

    placeEmoji(i, emoji);
    setPlayerMoves(updated);

    if (checkWin(updated)) {
      setWinner("Player Wins!");
    } else {
      setCurrentTurn("computer");
    }
  };

  useEffect(() => {
    if (currentTurn === "computer" && !winner) {
      setTimeout(computerPlay, 1000);
    }
  }, [currentTurn]);

  const startGame = (selected) => {
    setPlayerCategory(selected);
    const remaining = Object.keys(emojiCategories).filter(
      (c) => c !== selected
    );
    const aiChoice = remaining[Math.floor(Math.random() * remaining.length)];
    setComputerCategory(aiChoice);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg max-w-md w-full shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">
              Choose your Emoji Category
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(emojiCategories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => startGame(cat)}
                  className="p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {cat} {emojiCategories[cat].join(" ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {!showModal && (
        <div className="flex flex-col items-center justify-center mt-10 px-4 h-screen">
          <Board board={board} onCellClick={handleCellClick} />
          <div className="mt-6 text-center">
            {winner ? (
              <>
                <h2 className="text-2xl font-bold text-green-500">{winner}</h2>
                <Button onClick={()=>{setShowModal(true)}}>Play Again</Button>
              </>
            ) : (
              <p className="text-lg font-semibold">
                <span
                  className={
                    currentTurn === "player" ? "text-blue-500 font-bold" : ""
                  }
                >
                  Player
                </span>{" "}
                vs{" "}
                <span
                  className={
                    currentTurn === "computer" ? "text-red-500 font-bold" : ""
                  }
                >
                  Computer
                </span>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
