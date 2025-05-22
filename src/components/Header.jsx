import React from 'react';

export default function Header({ player1Category, player2Category, currentPlayer }) {
  return (
    <div className="header">
      <h1>Blink Tac Toe</h1>
      <p>Player 1: {player1Category} | Player 2: {player2Category}</p>
      <h3>Current Turn: Player {currentPlayer}</h3>
    </div>
  );
}
