import React, { useState } from 'react';
import '../src/App.css';
import Header from './components/Header';
import Board from './components/Board';
import ThemeToggle from './components/ThemeToggle';
import Help from './components/Help';
import { emojiCategories } from './assets/emojis';

export default function App() {
  const [player1Category, setPlayer1Category] = useState('Animals');
  const [player2Category, setPlayer2Category] = useState('Food');
  const [theme, setTheme] = useState('light');
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setWinner(null);
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <Header player1Category={player1Category} player2Category={player2Category} currentPlayer={winner ? '-' : 1} />
      {!winner ? (
        <>
          <div className="category-select">
            <label>Player 1 Category:</label>
            <select value={player1Category} onChange={e => setPlayer1Category(e.target.value)}>
              {Object.keys(emojiCategories).map(cat => <option key={cat}>{cat}</option>)}
            </select>
            <label>Player 2 Category:</label>
            <select value={player2Category} onChange={e => setPlayer2Category(e.target.value)}>
              {Object.keys(emojiCategories).map(cat => <option key={cat}>{cat}</option>)}
            </select>
          </div>
          <Board
            player1Category={player1Category}
            player2Category={player2Category}
            onGameEnd={(msg) => setWinner(msg)}
          />
        </>
      ) : (
        <div className="winner">
          <h2>{winner}</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
      <Help />
    </div>
  );
}
