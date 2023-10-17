import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CustomDropdown from '../utility/CustomDropdown';

const SetupGame = () => {
  const [players, setPlayers] = useState([{ name: '', quantity: '' }]);

  const addPlayer = () => {
    setPlayers([...players, { name: '', quantity: '' }]);
  };

  const deletePlayer = (index: number) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
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
        <button className="hover-bg-slate-300 active-bg-slate-200 rounded-full bg-slate-400 px-3 py-1 text-lg font-bold text-white shadow-lg">
          Tilbage
        </button>
      </Link>
      <h1 className="mb-5 text-4xl font-bold text-white">Setup Spil</h1>
      <div className="mb-5 flex h-[60%] w-[50%] flex-col gap-8 rounded-lg bg-slate-400 shadow-lg">
        <button
          onClick={addPlayer}
          className="hover-bg-slate-300 active-bg-slate-200 relative left-2 top-2 mb-2 h-16 w-16 rounded-full bg-slate-200 text-2xl font-bold text-slate-700 shadow-lg"
        >
          +
        </button>
        {players.map((player, index) => (
          <div className="flex flex-row gap-10" key={index}>
            <input
              className=" h-25 relative left-3 top-0 mb-2 flex w-2/5 rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
              placeholder="Navn"
              value={player.name}
              onChange={e => handlePlayerNameChange(index, e.target.value)}
            ></input>
            <input
              className="h-25 relative inset-x-0 top-0 mb-2 flex w-36 rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
              placeholder="Mængde"
              value={player.quantity}
              onChange={e => handlePlayerQuantityChange(index, e.target.value)}
            ></input>

            <CustomDropdown />

            <button
              onClick={() => deletePlayer(index)}
              className="hover-bg-slate-300 active-bg-slate-200 relative left-2 top-0 mb-2 h-16 w-16 rounded-full bg-slate-200 text-2xl font-bold text-slate-700 shadow-lg"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <Link to="/game">
        <button className="hover-bg-slate-300 active-bg-slate-200 mb-5 h-16 w-64 rounded-full bg-slate-400 text-2xl font-bold text-white shadow-lg">
          Start Spil
        </button>
      </Link>
    </div>
  );
};

export default SetupGame;
