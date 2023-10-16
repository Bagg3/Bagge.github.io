import React from 'react';
import { Link } from 'react-router-dom';

const Game: React.FC = () => {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-600">
        <Link to="/" className="absolute left-3 top-3">
          <button className="rounded-full bg-slate-400 px-3 text-lg font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
            Tilbage
          </button>
        </Link>
        <h1 className="mb-5 text-4xl font-bold text-white">Hestevæddeløbet</h1>
        <div className="mb-5 flex h-[60%] w-[50%] flex-col rounded-lg bg-slate-400 shadow-lg"></div>
        <div className="rounded-full bg-slate-400 px-4 text-lg font-bold text-white shadow-lg">
          Hest nr 2 rykker frem
        </div>
      </div>
    </>
  );
};

export default Game;
