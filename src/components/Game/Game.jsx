import { useMemo, useState } from 'react';
import GameLayout from './GameLayout.jsx';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const createEmptyField = () => Array(9).fill('');

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(() => createEmptyField());

  const canPlay = useMemo(() => !isGameEnded && !isDraw, [isDraw, isGameEnded]);

  const checkWinner = (nextField, player) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((cellIndex) => nextField[cellIndex] === player)
    );
  };

  const handleCellClick = (index) => {
    if (!canPlay || field[index]) {
      return;
    }

    const nextField = [...field];
    nextField[index] = currentPlayer;

    if (checkWinner(nextField, currentPlayer)) {
      setField(nextField);
      setIsGameEnded(true);
      return;
    }

    if (!nextField.includes('')) {
      setField(nextField);
      setIsDraw(true);
      return;
    }

    setField(nextField);
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
  };

  const handleRestart = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(createEmptyField());
  };

  return (
    <GameLayout
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      isDraw={isDraw}
      field={field}
      onCellClick={handleCellClick}
      onRestart={handleRestart}
    />
  );
};

export default Game;
