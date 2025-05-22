import React from 'react';

export default function Help() {
  return (
    <div className="help">
      <h2>How to Play</h2>
      <ul>
        <li>Choose an emoji category for each player.</li>
        <li>Each player can place only 3 emojis. The oldest disappears if a 4th is placed.</li>
        <li>Form a line of 3 of your emojis to win (horizontally, vertically, or diagonally).</li>
        <li>Turn alternates between players.</li>
      </ul>
    </div>
  );
}
