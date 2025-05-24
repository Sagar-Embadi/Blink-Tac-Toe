import React from 'react';
import Lottie from 'lottie-react';
import winnerAnimation from '../assets/winnerAnimation.json'; // Replace with your Lottie JSON file

export default function WinnerModal({ winnerName, onPlayAgain }) {
  return (
    <div className="fixed inset-0 bg-white/70 dark:bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg max-w-md w-full shadow-lg text-center">
        <Lottie animationData={winnerAnimation} loop={false} className="w-48 h-48 mx-auto object-fit" />
        <h2 className="text-2xl font-bold mt-4">{winnerName} Wins!</h2>
        <button
          onClick={onPlayAgain}
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
