import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HorseTrack from '../components/HorseTrack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
        <Link to="/" className="absolute left-3 top-3">
          <button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
            <ArrowBackIcon />
          </button>
        </Link>
        <h1 className="mb-5 text-4xl font-bold text-[#f1f1f1]">
          Hestevæddeløbet
        </h1>
        <div className="mb-5 flex h-[60%] w-[50%] flex-col items-center justify-center gap-14 rounded-lg bg-[#d65639] shadow-lg">
          <div className="absolute h-[50%] w-[45%] rounded-lg bg-[#ffffff54] shadow-lg"></div>
          <HorseTrack positionIndex={horsePositionsArray[0]} color="red" />
          <HorseTrack positionIndex={horsePositionsArray[1]} color="blue" />
          <HorseTrack positionIndex={horsePositionsArray[2]} color="green" />
          <HorseTrack positionIndex={horsePositionsArray[3]} color="yellow" />
        </div>
        <div
          className="rounded-full bg-[#be4b32] px-4 text-lg font-bold text-white shadow-lg"
          onClick={handleClick}
        >
          Hest nr 2 rykker frem
        </div>
      </div>
    </>
  );
};

export default Game;
