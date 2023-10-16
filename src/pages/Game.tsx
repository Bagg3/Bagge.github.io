import React from "react";
import { Link } from "react-router-dom";

const Game: React.FC = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-600">
        <Link to="/" className="absolute top-3 left-3">
          <button className="bg-slate-400 text-white text-lg font-bold rounded-full shadow-lg px-3 hover:bg-slate-300 active:bg-slate-200">
            Tilbage
          </button>
        </Link>
        <h1 className="text-4xl mb-5 font-bold text-white">Hestevæddeløbet</h1>
        <div className="w-[50%] h-[60%] bg-slate-400 rounded-lg flex flex-col mb-5 shadow-lg"></div>
        <div className="bg-slate-400 text-white text-lg font-bold rounded-full shadow-lg px-4">
          Hest nr 2 rykker frem
        </div>
      </div>
    </>
  );
};

export default Game;
