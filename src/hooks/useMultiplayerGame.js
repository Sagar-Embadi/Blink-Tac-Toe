import { useState } from 'react';
import { emojiCategories } from '../assets/emojis';

export default function useMultiplayerGame(players) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerMoves, setPlayerMoves] = useState({ 1: [], 2: [] });
  const [winner, setWinner] = useState(null);

  const player1Category = players?.player1?.category || 'Animals';
  const player2Category = players?.player2?.category || 'Food';

  // const player1Category = 'Animals';
  // const player2Category = 'Food';

  const getRandomEmoji = (category) => {
    const emojis = emojiCategories[category];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const checkWin = (moves) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    return lines.some(line => line.every(i => moves.includes(i)));
  };

  const handleMove = (index) => {
    if (winner || board[index]) return;

    const category = currentPlayer === 1 ? player1Category : player2Category;
    const emoji = getRandomEmoji(category);
    const moves = [...playerMoves[currentPlayer], index];
    const updatedBoard = [...board];
    updatedBoard[index] = emoji;

    if (moves.length > 3) {
      const removed = moves.shift();
      updatedBoard[removed] = null;
    }

    setPlayerMoves(prev => ({ ...prev, [currentPlayer]: moves }));
    setBoard(updatedBoard);

    if (checkWin(moves)) {
      setWinner(`Player ${currentPlayer} Wins!`);
    } else {
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayerMoves({ 1: [], 2: [] });
    setCurrentPlayer(1);
    setWinner(null);
  };

  return {
    board,
    handleMove,
    winner,
    currentPlayer,
    resetGame,
    player1Category,
    player2Category
  };

}
