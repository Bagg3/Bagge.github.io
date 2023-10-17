import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SetupGameCHATGPT = () => {
  const [players, setPlayers] = useState([{ name: '', quantity: '' }]);

  const addPlayer = () => {
    setPlayers([...players, { name: '', quantity: '' }]);
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].name = name;
    setPlayers(updatedPlayers);
  };

  const handlePlayerQuantityChange = (index: number, quantity: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].quantity = quantity;
    setPlayers(updatedPlayers);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-600">
      <Link to="/" className="absolute left-3 top-3">
        <button className="rounded-full bg-slate-400 px-3 py-1 text-lg font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200">
          Tilbage
        </button>
      </Link>
      <h1 className="mb-5 text-4xl font-bold text-white">Setup Spillere</h1>
      {players.map((player, index) => (
        <div
          key={index}
          className="mb-5 flex h-[60%] w-[50%] flex-row gap-8 rounded-lg bg-slate-400 shadow-lg"
        >
          <input
            className="relative left-4 top-5 mb-2 flex h-1/5 w-1/3 rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
            placeholder="Navn"
            value={player.name}
            onChange={e => handlePlayerNameChange(index, e.target.value)}
          />
          <input
            className="relative inset-x-0 top-5 mb-2 flex h-1/5 w-1/5 rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
            placeholder="Mængde"
            value={player.quantity}
            onChange={e => handlePlayerQuantityChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="mb-5 flex h-[60%] w-[50%] flex-row gap-8 rounded-lg bg-slate-400 shadow-lg">
        <button
          onClick={addPlayer}
          className="mb-5 h-16 w-16 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg hover:bg-slate-300 active:bg-slate-200"
        >
          +
        </button>
        <select className="mb-5 h-16 w-48 rounded-full bg-slate-200 text-lg font-bold text-black">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <Link to="/game">
          <button className="hover-bg-slate-300 active-bg-slate-200 mb-5 h-16 w-64 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg">
            Start Spil
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SetupGameCHATGPT;
