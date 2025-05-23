import React, { useState } from 'react';
import { emojiCategories } from '../assets/emojis';

export default function PlayerSetupModal({ onStart }) {
  const [player1, setPlayer1] = useState({ name: '', category: '' });
  const [player2, setPlayer2] = useState({ name: '', category: '' });

  const handleStart = () => {
    if (player1.name && player2.name && player1.category && player2.category) {
      onStart({player1, player2});
    } else {
      alert('Please enter names and select categories for both players.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg max-w-md w-full shadow-lg">
        <h2 className="text-xl font-bold mb-4">Player Setup</h2>
        <div className="mb-4">
          <label className="block mb-1">Player 1 Name:</label>
          <input
            type="text"
            value={player1.name}
            onChange={(e) => setPlayer1({ ...player1, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <label className="block mt-2 mb-1">Emoji Category:</label>
          <select
            value={player1.category}
            onChange={(e) => setPlayer1({ ...player1, category: e.target.value })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Category</option>
            {Object.keys(emojiCategories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Player 2 Name:</label>
          <input
            type="text"
            value={player2.name}
            onChange={(e) => setPlayer2({ ...player2, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <label className="block mt-2 mb-1">Emoji Category:</label>
          <select
  value={player2.category}
  onChange={(e) => setPlayer2({ ...player2, category: e.target.value })}
  className="w-full p-2 border rounded"
>
  <option value="">Select Category</option>
  {Object.keys(emojiCategories)
    .filter((cat) => cat !== player1.category) // exclude selected by Player 1
    .map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
</select>

        </div>
        <button
          onClick={handleStart}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
