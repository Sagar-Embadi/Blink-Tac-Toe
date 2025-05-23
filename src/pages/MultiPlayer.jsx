// import Board from '@/components/Board';
// import useMultiplayerGame from '../hooks/useMultiplayerGame';

// export function Multiplayer() {
//   const { board, handleMove, winner, currentPlayer, player1Category, player2Category } = useMultiplayerGame();

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center h-screen">
//         <Board board={board} onCellClick={handleMove} />
//         <div className="mt-6">
//           {winner ? (
//             <h2 className="text-2xl text-green-600 font-bold">{winner}</h2>
//           ) : (
//             <p className="text-lg">
//               <span className={currentPlayer === 1 ? "text-blue-500 font-bold" : ""}>Player 1</span> ({player1Category}) vs
//               <span className={currentPlayer === 2 ? "text-red-500 font-bold ml-1" : "ml-1"}>Player 2</span> ({player2Category})
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   )
// }

import React, { useState } from 'react';
import PlayerSetupModal from '../components/PlayerSetupModal';
import MultiplayerBoard from '../components/Board';
import useMultiplayerGame from '../hooks/useMultiplayerGame';
import WinnerModal from '@/components/WinnerModal';

export function Multiplayer() {
  const [players, setPlayers] = useState(null);
  const {
    board,
    handleMove,
    winner,
    currentPlayer,
    resetGame,
    // player1Category,
    // player2Category,
  } = useMultiplayerGame(players);

  if (!players) {
    return <PlayerSetupModal onStart={setPlayers} />;
  }

  return (
    <>
      <div className="flex flex-col items-center mt-8 h-screen">
        <MultiplayerBoard board={board} onCellClick={handleMove} />
        <div className="mt-6">
          {winner ? (
            <WinnerModal
              winnerName={currentPlayer === 1 ? players.player1?.name : players.player2?.name}
              onPlayAgain={() => {
                setPlayers(null);
                resetGame();
              }}
            />
          ) : (
            <p className="text-lg">
              <span className={currentPlayer === 1 ? 'text-blue-500 font-bold' : ''}>
                {players.player1?.name}
              </span>{' '}
              vs{' '}
              <span className={currentPlayer === 2 ? 'text-red-500 font-bold' : ''}>
                {players.player2?.name}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
