import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { emojiCategories } from '@/assets/emojis';

export default function PlayerHeader({ currentTurn, playerCategory, computerCategory, playerName, computerName }) {
  return (
    <div className="w-full max-w-110 flex justify-around items-center gap-2 p-4 mt-6 border-t">
      {/* Player */}
      <div className={`flex items-center p-2 gap-2 ${currentTurn === 'player' || currentTurn === 'player1' ? 'scale-105 font-bold border border-2 border-grey-900 rounded-full border-blue-900 ' : 'opacity-70'}`}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{playerName?playerName[0]:'YOU'}</Avatar>
        <div>
          <div className="capitalize">{playerName?playerName:'YOU'}</div>
          <div className="text-sm">{playerCategory} 
            {playerCategory && emojiCategories[playerCategory][0]}
            </div>
        </div>
      </div>

      {/* VS */}
      <div className="bg-white text-blue-800 font-bold px-3 py-1 rounded-full text-sm shadow">
        VS
      </div>

      {/* Computer or player 2*/}
      <div className={`flex items-center gap-2 p-2 ${currentTurn === 'computer' || currentTurn === 'player2' ? 'scale-105 font-bold border border-2 border-grey-900 rounded-full border-blue-900 ' : 'opacity-70'}`}>
        <div>
          <div className="capitalize">{computerName?computerName:"Computer"}</div>
          <div className="text-sm">{computerCategory}
            {playerCategory && emojiCategories[playerCategory][0]}
          </div>
        </div>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{computerName?computerName[0] : 'C'}</Avatar>
      </div>
    </div>
  );
}
