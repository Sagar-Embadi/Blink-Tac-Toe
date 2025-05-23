import React from 'react';
import { FaRobot, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export function GameSelection() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 px-4">
      <h1 className="text-3xl font-bold dark:text-white">Choose Game Mode</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div
          onClick={() => navigate('computer')}
          className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
        >
          <div className="flex items-center gap-4">
            <FaRobot className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Player vs Computer</h2>
              <p className="text-sm text-white/90">Play against a smart AI!</p>
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="AI Icon"
            className="w-32 mx-auto mt-4"
          />
        </div>

        <div
          onClick={() => navigate('multi')}
          className="cursor-pointer bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300"
        >
          <div className="flex items-center gap-4">
            <FaUsers className="text-4xl" />
            <div>
              <h2 className="text-2xl font-bold">Multiplayer</h2>
              <p className="text-sm text-white/90">Play with a friend locally!</p>
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
            alt="Multiplayer Icon"
            className="w-32 mx-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
}
