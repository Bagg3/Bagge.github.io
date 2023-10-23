import { Link } from 'react-router-dom';
import { useState } from 'react';
import CustomDropdown from '../components/CustomDropdown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

  const horses = [
    { value: 'option1', label: 'Hest 1', colorClass: 'bg-red-500' },
    { value: 'option2', label: 'Hest 2', colorClass: 'bg-green-500' },
    { value: 'option3', label: 'Hest 3', colorClass: 'bg-blue-500' },
    { value: 'option4', label: 'Hest 4', colorClass: 'bg-yellow-400' },
  ];

  //const cardHeight = 'h-25'; // Height of the card in the setup game page - CHANGE THIS AND USE STYLE

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
      <Link to="/" className="absolute left-3 top-3">
        <button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
          <ArrowBackIcon />
        </button>
      </Link>
      <h1 className="mb-5 text-4xl font-bold text-white">Setup Spil</h1>
      <div className="mb-5 flex h-[60%] w-[50%] flex-col gap-8 overflow-y-auto overflow-x-hidden rounded-lg bg-[#d4584f] shadow-lg">
        <button
          onClick={addPlayer}
          className="relative left-2 top-2 mb-2 h-16 w-16 rounded-full bg-slate-200 text-2xl font-bold text-slate-700 shadow-lg hover:bg-slate-300 active:bg-slate-200"
        >
          +
        </button>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png"
            className="absolute right-3 top-3 flex h-16 w-16 rounded-full"
          />
        </button>

        {players.map((player, index) => (
          <div
            className="relative bottom-8 left-16 flex flex-row gap-10"
            key={index}
          >
            <input
              className="mb-1 flex h-16 w-2/5 rounded-xl bg-slate-200 px-5 text-left text-lg font-bold text-black"
              placeholder="Navn"
              value={player.name}
              onChange={e => handlePlayerNameChange(index, e.target.value)}
            ></input>
            <input
              className="relative inset-x-0 top-0 mb-1 flex h-16 w-36 rounded-xl bg-slate-200 px-5 text-center text-lg font-bold text-black"
              placeholder="Mængde"
              value={player.quantity}
              onChange={e => handlePlayerQuantityChange(index, e.target.value)}
            ></input>

            <CustomDropdown menuItems={horses} />

            <button>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                alt="delete"
                onClick={() => deletePlayer(index)}
                className="relative left-2 top-0 mb-2 h-16 w-16 rounded-full text-2xl font-bold hover:bg-slate-300 active:bg-slate-200"
              />
            </button>
          </div>
        ))}
      </div>
      <Link to="/game">
        <button className="mb-5 h-16 w-64 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a]">
          Start Spil
        </button>
      </Link>
    </div>
  );
};

export default SetupGame;
