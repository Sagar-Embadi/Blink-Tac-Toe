import { useEffect, useState } from 'react';
import { emojiCategories } from '../assets/emojis';

export default function useSinglePlayerGame(showModal, setShowModal) {
  const [playerCategory, setPlayerCategory] = useState(null);
  const [computerCategory, setComputerCategory] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const [playerBoardMoves, setPlayerBoardMoves] = useState([]);
  const [computerBoardMoves, setComputerBoardMoves] = useState([]);
  const [playerAllMoves, setPlayerAllMoves] = useState([]);
  const [computerAllMoves, setComputerAllMoves] = useState([]);

  const [currentTurn, setCurrentTurn] = useState('player');
  const [winner, setWinner] = useState(null);
  const [winningCells, setWinningCells] = useState([]);

  const [playerEmojiDeck, setPlayerEmojiDeck] = useState([]);
  const [computerEmojiDeck, setComputerEmojiDeck] = useState([]);

  const [playerUsedEmojis, setPlayerUsedEmojis] = useState([]);
  const [computerUsedEmojis, setComputerUsedEmojis] = useState([]);

  const [playerWinStreak, setPlayerWinStreak] = useState(0);
  const [computerWinStreak, setComputerWinStreak] = useState(0);

  const shuffle = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const getNextEmoji = (deckSetter, deck) => {
    const [next, ...rest] = deck;
    deckSetter(rest);
    return next;
  };

  const checkWin = (moves) => {
    const combos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6],
    ];
    for (let combo of combos) {
      if (combo.every(i => moves.includes(i))) {
        setWinningCells(combo);
        return true;
      }
    }
    return false;
  };

  const placeEmoji = (index, emoji) => {
    const newBoard = [...board];
    newBoard[index] = emoji;
    setBoard(newBoard);
  };

  const computerPlay = () => {
    const available = board.map((v, i) => (v === null ? i : null)).filter(i => i !== null);
    if (!available.length || computerEmojiDeck.length === 0) return;

    const index = available[Math.floor(Math.random() * available.length)];
    const emoji = getNextEmoji(setComputerEmojiDeck, computerEmojiDeck);

    const boardMoves = [...computerBoardMoves, index];
    const allMoves = [...computerAllMoves, index];

    if (boardMoves.length > 3) {
      const removed = boardMoves.shift();
      board[removed] = null;
    }

    placeEmoji(index, emoji);
    setComputerBoardMoves(boardMoves);
    setComputerAllMoves(allMoves);
    setComputerUsedEmojis(prev => [...prev, emoji]);

    if (checkWin(boardMoves)) {
      setTimeout(() => {
        setWinner('Computer');
      }, 2000);
      setComputerWinStreak(prev => prev + 1);
    } else {
      setCurrentTurn('player');
    }
  };

  const handlePlayerMove = (i) => {
    if (winner || board[i] || currentTurn !== 'player' || playerEmojiDeck.length === 0) return;

    const emoji = getNextEmoji(setPlayerEmojiDeck, playerEmojiDeck);
    const boardMoves = [...playerBoardMoves, i];
    const allMoves = [...playerAllMoves, i];

    if (boardMoves.length > 3) {
      const removed = boardMoves.shift();
      board[removed] = null;
    }

    placeEmoji(i, emoji);
    setPlayerBoardMoves(boardMoves);
    setPlayerAllMoves(allMoves);
    setPlayerUsedEmojis(prev => [...prev, emoji]);

    if (checkWin(boardMoves)) {
      setTimeout(() => {
        setWinner('Player');
      }, 2000);
      setPlayerWinStreak(prev => prev + 1);
    } else {
      setCurrentTurn('computer');
    }
  };

  useEffect(() => {
    if (currentTurn === 'computer' && !winner) {
      setTimeout(computerPlay, 800);
    }
  }, [currentTurn]);

  const resetGame = () => {
    setShowModal(true);
    setBoard(Array(9).fill(null));
    setPlayerBoardMoves([]);
    setComputerBoardMoves([]);
    setPlayerAllMoves([]);
    setComputerAllMoves([]);
    setCurrentTurn('player');
    setWinner(null);
    setWinningCells([]);
    setPlayerUsedEmojis([]);
    setComputerUsedEmojis([]);
  };

  const initPlayerCategory = (selected) => {
    setPlayerCategory(selected);
    const playerDeck = shuffle(emojiCategories[selected]);
    setPlayerEmojiDeck(playerDeck);

    const other = Object.keys(emojiCategories).filter(c => c !== selected);
    const aiChoice = other[Math.floor(Math.random() * other.length)];
    setComputerCategory(aiChoice);
    setComputerEmojiDeck(shuffle(emojiCategories[aiChoice]));

    setShowModal(false);
  };

  return {
    board,
    handlePlayerMove,
    winner,
    currentTurn,
    setPlayerCategory: initPlayerCategory,
    resetGame,
    playerCategory,
    computerCategory,
    winningCells,
    playerMoves: playerAllMoves,
    computerMoves: computerAllMoves,
    lastPlayerMove: playerAllMoves.at(-1),
    lastComputerMove: computerAllMoves.at(-1),
    totalMoves: playerAllMoves.length + computerAllMoves.length,
    playerEmojis: playerUsedEmojis,
    computerEmojis: computerUsedEmojis,
    playerWinStreak,
    computerWinStreak
  };
}
