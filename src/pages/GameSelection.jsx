import { MultiPlayerCard, SinglePlayerCard } from '@/components/GameSelectionCards';
import React from 'react';

export function GameSelection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 px-4">
      <h1 className="text-3xl font-bold dark:text-white">Choose Game Mode</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <SinglePlayerCard/>
        <MultiPlayerCard/>
      </div>
    </div>
  );
}
