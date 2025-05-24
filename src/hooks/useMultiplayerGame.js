// import { useState } from 'react';
// import { emojiCategories } from '../assets/emojis';

// export default function useMultiplayerGame() {
//   const [player1, setPlayer1] = useState({name:'',category:''});
//   const [player2, setPlayer2] = useState({name:'',category:''});

//   const [board, setBoard] = useState(Array(9).fill(null));
//   const [currentTurn, setCurrentTurn] = useState('player1');
//   const [winner, setWinner] = useState(null);
//   const [winningCells, setWinningCells] = useState([]);
//   const [moves, setMoves] = useState({ player1: [], player2: [] });
//   const [emojis, setEmojis] = useState({ player1: [], player2: [] });

//   const [player1WinStreak, setPlayer1WinStreak] = useState(0);
//   const [player2WinStreak, setPlayer2WinStreak] = useState(0);

//   const getRandomEmoji = (cat) => {
//     const items = emojiCategories[cat];
//     return items[Math.floor(Math.random() * items.length)];
//   };

//   const checkWin = (playerMoves) => {
//     const combos = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8],
//       [0, 3, 6], [1, 4, 7], [2, 5, 8],
//       [0, 4, 8], [2, 4, 6],
//     ];
//     for (let combo of combos) {
//       if (combo.every(i => playerMoves.includes(i))) {
//         setWinningCells(combo);
//         return true;
//       }
//     }
//     return false;
//   };

//   const handleMove = (index) => {
//     if (winner || board[index]) return;

//     const playerKey = currentTurn;
//     const otherKey = playerKey === 'player1' ? 'player2' : 'player1';
//     const currentPlayer = playerKey === 'player1' ? player1 : player2;
//     const emoji = getRandomEmoji(currentPlayer.category);

//     const newBoard = [...board];
//     newBoard[index] = emoji;

//     const newMoves = { ...moves };
//     newMoves[playerKey] = [...newMoves[playerKey], index];
//     if (newMoves[playerKey].length > 3) {
//       const removed = newMoves[playerKey].shift();
//       newBoard[removed] = null;
//     }

//     setBoard(newBoard);
//     setMoves(newMoves);
//     setEmojis(prev => ({
//       ...prev,
//       [playerKey]: [...prev[playerKey], emoji],
//     }));

//     if (checkWin(newMoves[playerKey])) {
//       setTimeout(() => {
//         setWinner(currentPlayer.name);
//         if (playerKey === 'player1') {
//           setPlayer1WinStreak(prev => prev + 1);
//         } else {
//           setPlayer2WinStreak(prev => prev + 1);
//         }
//       }, 2000);
//     } else {
//       setCurrentTurn(otherKey);
//     }
//   };

//   const resetGame = () => {
//     setBoard(Array(9).fill(null));
//     setMoves({ player1: [], player2: [] });
//     setEmojis({ player1: [], player2: [] });
//     setCurrentTurn('player1');
//     setWinner(null);
//     setWinningCells([]);
//   };

//   return {
//     player1, player2,
//     setPlayer1, setPlayer2,
//     player1WinStreak, player2WinStreak,
//     board, handleMove, currentTurn,
//     winner, winningCells,
//     emojis, moves,
//     resetGame,
//     lastMove: {
//       player1: moves.player1.at(-1),
//       player2: moves.player2.at(-1),
//     },
//     totalMoves: moves.player1.length + moves.player2.length,
//     isReady: player1 && player2,
//   };
// }

import { useState } from 'react';
import { emojiCategories } from '../assets/emojis';

export default function useMultiplayerGame() {
  const [player1, setPlayer1] = useState({ name: '', category: '' });
  const [player2, setPlayer2] = useState({ name: '', category: '' });

  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('player1');
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);
  const [moves, setMoves] = useState({ player1: [], player2: [] });

  const [emojisUsed, setEmojisUsed] = useState({ player1: [], player2: [] });
  const [emojiDecks, setEmojiDecks] = useState({ player1: [], player2: [] });

  const [player1WinStreak, setPlayer1WinStreak] = useState(0);
  const [player2WinStreak, setPlayer2WinStreak] = useState(0);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  
  const getNextEmoji = (playerKey) => {
    const deck = emojiDecks[playerKey];
    if (!deck.length) return null;

    const [emoji, ...rest] = deck;
    setEmojiDecks(prev => ({
      ...prev,
      [playerKey]: rest
    }));
    return emoji;
  };

  const checkWin = (playerMoves) => {
    const combos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let combo of combos) {
      if (combo.every(i => playerMoves.includes(i))) {
        setWinningCells(combo);
        return true;
      }
    }
    return false;
  };

  const handleMove = (index) => {
    if (winner || board[index]) return;

    const playerKey = currentTurn;
    const otherKey = playerKey === 'player1' ? 'player2' : 'player1';
    const currentPlayer = playerKey === 'player1' ? player1 : player2;

    const emoji = getNextEmoji(playerKey);
    if (!emoji) return; // No emoji left in deck

    const newBoard = [...board];
    newBoard[index] = emoji;

    const newMoves = { ...moves };
    newMoves[playerKey] = [...newMoves[playerKey], index];
    if (newMoves[playerKey].length > 3) {
      const removed = newMoves[playerKey].shift();
      newBoard[removed] = null;
    }

    setBoard(newBoard);
    setMoves(newMoves);
    setEmojisUsed(prev => ({
      ...prev,
      [playerKey]: [...prev[playerKey], emoji],
    }));

    if (checkWin(newMoves[playerKey])) {
      setTimeout(() => {
        setWinner(currentPlayer.name);
        if (playerKey === 'player1') {
          setPlayer1WinStreak(prev => prev + 1);
        } else {
          setPlayer2WinStreak(prev => prev + 1);
        }
      }, 2000);
    } else {
      setCurrentTurn(otherKey);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setMoves({ player1: [], player2: [] });
    setEmojisUsed({ player1: [], player2: [] });
    setCurrentTurn('player1');
    setWinner(null);
    setWinningCells([]);

    // Reshuffle emoji decks from original categories
    if (player1.category && player2.category) {
      setEmojiDecks({
        player1: shuffle(emojiCategories[player1.category]),
        player2: shuffle(emojiCategories[player2.category]),
      });
    }
  };

  const initializePlayers = (p1, p2) => {
    setPlayer1(p1);
    setPlayer2(p2);
    setEmojiDecks({
      player1: shuffle(emojiCategories[p1.category]),
      player2: shuffle(emojiCategories[p2.category]),
    });
  };

  return {
    player1, player2,
    setPlayer1, setPlayer2,
    initializePlayers,
    player1WinStreak, player2WinStreak,
    board, handleMove, currentTurn,
    winner, winningCells,
    emojis: emojisUsed, moves,
    resetGame,
    lastMove: {
      player1: moves.player1.at(-1),
      player2: moves.player2.at(-1),
    },
    totalMoves: moves.player1.length + moves.player2.length,
    isReady: !!player1.name && !!player2.name && !!player1.category && !!player2.category,
  };
}

