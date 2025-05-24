// import React, { useState } from "react";
// import PlayerSetupModal from "../components/PlayerSetupModal";
// import Board from "../components/Board";
// import useMultiplayerGame from "@/hooks/useMultiplayerGame";
// import PlayerHeader from "../components/PlayerHeader";
// import { GameStatsMultiplayer } from "@/components/GameStatsMultiplayer";
// import WinnerModal from "@/components/WinnerModal";

// export function Multiplayer() {
//   const [players, setPlayers] = useState(null);

//   const {
//     board,
//     handleMove,
//     currentTurn,
//     resetGame,
//     player1,
//     player2,
//     setPlayer1,
//     setPlayer2,
//     emojis,
//     player1Moves,
//     player2Moves,
//     winningCells,
//     winner,
//     player1WinStreak,
//     player2WinStreak,
//   } = useMultiplayerGame();

//   return (
//     <>
//       {!players && <PlayerSetupModal 
//         onStart={setPlayers}
//         player1={player1}
//         player2={player2}
//         setPlayer1={setPlayer1}
//         setPlayer2={setPlayer2}
//       />}
//       {players && (
//         <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-4 mt-10 pt-18 min-h-screen">
//           <div>
//             <Board
//               board={board}
//               onCellClick={handleMove}
//               winningCells={winningCells}
//             />
//             <PlayerHeader
//               currentTurn={currentTurn}
//               playerCategory={player1?.category}
//               computerCategory={player2?.category}
//               playerMoves={player1Moves}
//               computerMoves={player2Moves}
//               playerName={player1?.name}
//               computerName={player2?.name}
//             />
//           </div>
//           <div className="mt-6">
//             <GameStatsMultiplayer
//               emojis={emojis}
//               player1={player1}
//               player2={player2}
//               player1Streak={player1WinStreak}
//               player2Streak={player2WinStreak}
//             />
//           </div>
//         </div>
//       )}
//       {winner && (
//         <WinnerModal
//           winnerName={winner}
//           onPlayAgain={resetGame}
//         />
//       )}
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import PlayerSetupModal from "../components/PlayerSetupModal";
import Board from "../components/Board";
import useMultiplayerGame from "@/hooks/useMultiplayerGame";
import PlayerHeader from "../components/PlayerHeader";
import { GameStatsMultiplayer } from "@/components/GameStatsMultiplayer";
import WinnerModal from "@/components/WinnerModal";

export function Multiplayer() {
  const [players, setPlayers] = useState(null);

  const {
    board,
    handleMove,
    currentTurn,
    resetGame,
    player1,
    player2,
    setPlayer1,
    setPlayer2,
    initializePlayers,
    emojis,
    player1Moves,
    player2Moves,
    winningCells,
    winner,
    player1WinStreak,
    player2WinStreak,
  } = useMultiplayerGame();

  useEffect(() => {
    if (players && players.player1 && players.player2) {
      initializePlayers(players.player1, players.player2);
    }
  }, [players]);

  return (
    <>
      {!players && (
        <PlayerSetupModal
          onStart={(players) => setPlayers(players)}
          player1={player1}
          player2={player2}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
        />
      )}

      {players && (
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 px-4 mt-10 pt-18 min-h-screen">
          <div>
            <Board
              board={board}
              onCellClick={handleMove}
              winningCells={winningCells}
            />
            <PlayerHeader
              currentTurn={currentTurn}
              playerCategory={player1?.category}
              computerCategory={player2?.category}
              playerMoves={player1Moves}
              computerMoves={player2Moves}
              playerName={player1?.name}
              computerName={player2?.name}
            />
          </div>
          <div className="mt-6">
            <GameStatsMultiplayer
              emojis={emojis}
              player1={player1}
              player2={player2}
              player1Streak={player1WinStreak}
              player2Streak={player2WinStreak}
            />
          </div>
        </div>
      )}

      {winner && (
        <WinnerModal
          winnerName={winner}
          onPlayAgain={resetGame}
        />
      )}
    </>
  );
}
