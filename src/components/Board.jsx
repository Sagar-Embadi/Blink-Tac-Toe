import React from 'react';
import Cell from './Cell';

export default function Board({ board, winningCells, onCellClick }) {
  return (
    <div className="relative w-[330px] h-[340px] grid grid-cols-3 gap-1 justify-center items-center">
      {board.map((cell, i) => (
        <Cell
          key={i}
          value={cell}
          onClick={() => onCellClick(i)}
          isWinning={winningCells?.includes(i)}
        />
      ))}
    </div>
  );
}
