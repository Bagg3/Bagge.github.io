import { Link } from 'react-router-dom';
import { useState } from 'react';
import CustomDropdown from '../utility/CustomDropdown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SetupGame2 = () => {
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

  /*const horses = [
    { value: 'option1', label: 'Hest 1', colorClass: 'bg-red-500' },
    { value: 'option2', label: 'Hest 2', colorClass: 'bg-green-500' },
    { value: 'option3', label: 'Hest 3', colorClass: 'bg-blue-500' },
    { value: 'option4', label: 'Hest 4', colorClass: 'bg-yellow-400' },
  ];
  */

  //const cardHeight = 'h-25'; // Height of the card in the setup game page - CHANGE THIS AND USE STYLE

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
      <Link to="/" className="absolute left-3 top-3">
        <button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
          <ArrowBackIcon />
        </button>
      </Link>
      <h1 className="mb-5 text-4xl font-bold text-white">Setup Spil 2</h1>
      <div className="mb-5 h-[65%] w-[65%] gap-2 overflow-y-auto overflow-x-hidden rounded-lg bg-[#d4584f]  shadow-lg">
        <div className="grid  grid-cols-4 gap-4 overflow-y-auto overflow-x-hidden">
          <div className="mb-4 grid h-10 grid-flow-row rounded-full bg-red-600 text-center text-lg text-white">
            Hest 1
          </div>
          <div className="grid h-10 grid-flow-row rounded-full bg-green-600 text-center text-lg text-white">
            Hest 2
          </div>
          <div className="grid h-10 grid-flow-row rounded-full bg-blue-600 text-center text-lg text-white">
            Hest 3
          </div>
          <div className="grid h-10 grid-flow-row rounded-full bg-yellow-500 text-center text-lg text-white">
            Hest 4
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <input
            className="mb-1 h-16 w-3/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
            placeholder="Navn"
          ></input>
          <input
            className="mb-1 h-16 w-1/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
            placeholder="Bet"
          ></input>
          <input
            className="mb-1 h-16 w-3/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
            placeholder="Navn"
          ></input>
          <input
            className="mb-1 h-16 w-1/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
            placeholder="Bet"
          ></input>
          <input
            className="mb-1 h-16 w-3/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
            placeholder="Navn"
          ></input>
          <input
            className="mb-1 h-16 w-1/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
            placeholder="Bet"
          ></input>
          <input
            className="mb-1 h-16 w-3/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
            placeholder="Navn"
          ></input>
          <input
            className="mb-1 h-16 w-1/5 grid-flow-row rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
            placeholder="Bet"
          ></input>
        </div>
      </div>
      <Link to="/game">
        <button className="mb-5 h-16 w-64 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a]">
          Start Spil
        </button>
      </Link>
    </div>
  );
};

export default SetupGame2;
