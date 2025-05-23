
import React from 'react';
import Cell from './Cell';

export default function Board({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {board.map((val, i) => (
        <Cell key={i} value={val} onClick={() => onCellClick(i)} />
      ))}
    </div>
  );
}
