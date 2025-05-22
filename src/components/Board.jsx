import React, { useState } from 'react';
import Cell from './Cell';
import { emojiCategories } from '../assets/emojis';

export default function Board({ player1Category, player2Category, onGameEnd }) {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerMoves, setPlayerMoves] = useState({ 1: [], 2: [] });

  const getRandomEmoji = (category) => {
    const list = emojiCategories[category];
    return list[Math.floor(Math.random() * list.length)];
  };

  const checkWin = (moves) => {
    const winCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    for (const [a,b,c] of winCombos) {
      if (moves.some(m => m.index === a) &&
          moves.some(m => m.index === b) &&
          moves.some(m => m.index === c)) {
        return [a,b,c];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    if (board[i]) return;

    const category = currentPlayer === 1 ? player1Category : player2Category;
    const emoji = getRandomEmoji(category);
    const updatedMoves = [...playerMoves[currentPlayer], { index: i, emoji }];

    if (updatedMoves.length > 3) {
      const removed = updatedMoves.shift();
      board[removed.index] = null;
    }

    board[i] = emoji;
    setBoard([...board]);
    setPlayerMoves(prev => ({ ...prev, [currentPlayer]: updatedMoves }));

    const win = checkWin(updatedMoves);
    if (win) {
      onGameEnd(`Player ${currentPlayer} Wins!`, win);
      return;
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  return (
    <div className="board">
      {board.map((val, i) => (
        <Cell key={i} value={val} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}
