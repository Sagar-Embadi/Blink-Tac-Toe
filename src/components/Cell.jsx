import React from 'react';
import clsx from 'clsx';

export default function Cell({ value, onClick, isWinning }) {
  return (
    <button
      onClick={onClick}
      disabled={!!value}
      className={clsx(
        "w-24 h-24 text-3xl rounded-lg shadow-md flex items-center justify-center transition-all duration-300 ease-in-out justify-self-center",
        value
          ? "bg-gradient-to-br from-purple-400 to-indigo-500 text-white cursor-not-allowed scale-95"
          : "bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-800 cursor-pointer",
        isWinning && "ring-4 ring-green-400 animate-pulse"
      )}
    >
      <span className="transform transition-transform duration-300 hover:scale-125">
        {value}
      </span>
    </button>
  );
}
