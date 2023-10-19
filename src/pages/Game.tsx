import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HorseTrack from '../components/HorseTrack';

const Game: React.FC = () => {
  const [horsePositionsArray, setHorsePositionsArray] = useState([0, 0, 0, 0]);

  // Handle which horse should move forward and how many positions
  const handleHorseMovement = (horseNumber: number, numberOfMoves: number) => {
    setHorsePositionsArray(() => {
      const newPositionsArray = [...horsePositionsArray];

      newPositionsArray[horseNumber] < 6
        ? (newPositionsArray[horseNumber] += numberOfMoves)
        : newPositionsArray[horseNumber];

      return newPositionsArray;
    });
  };

  const handleClick = () => {
    const randomHorseNumber = Math.floor(Math.random() * 4);
    const randomNumberOfMoves = Math.floor(Math.random() * 2) + 1;

    handleHorseMovement(randomHorseNumber, randomNumberOfMoves);
  };

  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-600">
        <Link to="/" className="absolute left-3 top-3">
          <button className="rounded-full bg-slate-400 px-3 text-lg font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
            Tilbage
          </button>
        </Link>
        <h1 className="mb-5 text-4xl font-bold text-white">Hestevæddeløbet</h1>
        <div className="mb-5 flex h-[60%] w-[50%] flex-col items-center justify-center gap-14 rounded-lg bg-slate-400 shadow-lg">
          <HorseTrack positionIndex={horsePositionsArray[0]} color="red" />
          <HorseTrack positionIndex={horsePositionsArray[1]} color="blue" />
          <HorseTrack positionIndex={horsePositionsArray[2]} color="green" />
          <HorseTrack positionIndex={horsePositionsArray[3]} color="yellow" />
        </div>
        <div
          className="rounded-full bg-slate-400 px-4 text-lg font-bold text-white shadow-lg"
          onClick={handleClick}
        >
          Hest nr 2 rykker frem
        </div>
      </div>
    </>
  );
};

export default Game;
