import React, { useState } from "react";
import EmojiCategoryModal from "../components/EmojiCategoryModal";
import Board from "../components/Board";
import useSinglePlayerGame from "@/hooks/useSinglePlayerGame";
import { Button } from "@/components/ui/button";
import PlayerHeader from "../components/PlayerHeader";
import { GameStats } from "@/components/GameStats";
import WinnerModal from "@/components/WinnerModal";

export default function SinglePlayerGame() {
  const [showModal, setShowModal] = useState(true);
  const {
    board,
    handlePlayerMove,
    winner,
    currentTurn,
    setPlayerCategory,
    resetGame,
    playerCategory,
    computerCategory,
    playerMoves,
    computerMoves,
    winningCells,
    playerEmojis,
    computerEmojis,
    playerWinStreak,
    computerWinStreak,
  } = useSinglePlayerGame(showModal, setShowModal);

  return (
    <>
      {showModal && <EmojiCategoryModal onSelect={setPlayerCategory} />}
      {!showModal && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-4 mt-10 pt-18 min-h-screen">
          <div>
            <Board
              board={board}
              onCellClick={handlePlayerMove}
              winningCells={winningCells}
            />
            <PlayerHeader
              currentTurn={currentTurn}
              playerCategory={playerCategory}
              computerCategory={computerCategory}
              playerMoves={playerMoves}
              computerMoves={computerMoves}
            />
          </div>
          <div className="mt-6 ">
            <GameStats
              playerWinStreak={playerWinStreak}
              computerWinStreak={computerWinStreak}
              playerEmojis={playerEmojis}
              computerEmojis={computerEmojis}
            />
          </div>
        </div>
      )}
      {winner &&
       <WinnerModal
        winnerName={winner}
        onPlayAgain={resetGame}
        />}
    </>
  );
}
