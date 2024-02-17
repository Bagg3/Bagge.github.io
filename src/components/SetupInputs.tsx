import React, { useState, useEffect } from 'react';
import ADD from '@mui/icons-material/Add';
import CLOSE from '@mui/icons-material/Close';
import { usePlayerData } from './PlayerDataContext';
import { Player } from '../utility/types';

interface SetupInputProps {
	inputs: {
		horseName: string;
		horseColor: string;
	};
	onPlayersChange: (updatedPlayers: Player[], horseName: string) => void;
}

const SetupInputs: React.FC<SetupInputProps> = ({
	inputs,
	onPlayersChange,
}) => {
	const { horseName, horseColor } = inputs;
	const { players } = usePlayerData();
	const horsePlayers = players.filter(player => player.horse === horseName);

	// Local state for the players of the horse
	const [localPlayers, setLocalPlayers] = useState(horsePlayers);

	// Function to add a new player to the localPlayers array
	const addPlayer = () => {
		const newPlayer = { name: '', quantity: '', horse: inputs.horseName };
		setLocalPlayers([...localPlayers, newPlayer]);
	};

	// Function to delete a player from the localPlayers array
	const deletePlayer = (playerIndex: number) => {
		const updatedPlayers = localPlayers.filter(
			(_, index) => index !== playerIndex
		);
		setLocalPlayers(updatedPlayers);
	};

	// Function to handle the change of a player's name
	const handlePlayerNameChange = (playerIndex: number, name: string) => {
		const updatedPlayers = localPlayers.map((player, index) =>
			index === playerIndex ? { ...player, name } : player
		);
		setLocalPlayers(updatedPlayers);
	};

	// Function to handle the change of a player's bet quantity
	const handlePlayerQuantityChange = (
		playerIndex: number,
		quantity: string
	) => {
		const updatedPlayers = localPlayers.map((player, index) =>
			index === playerIndex ? { ...player, quantity } : player
		);
		setLocalPlayers(updatedPlayers);
	};

	// Update the players array in PlayerDataContext.tsx when the localPlayers array changes
	useEffect(() => {
		onPlayersChange(localPlayers, inputs.horseName);
	}, [localPlayers, inputs.horseName, onPlayersChange]);

	// Update the localPlayers array when the players array in PlayerDataContext.tsx changes
	useEffect(() => {
		setLocalPlayers(
			players.filter(player => player.horse === inputs.horseName)
		);
	}, []);

	return (
		<div className="flex h-full w-full flex-col gap-3 rounded-[25px] bg-[#ffffff54] p-5">
			<div className="flex justify-center">
				<div
					className={`${horseColor} mb-2 flex h-16 w-1/2 items-center justify-center rounded-full text-center text-2xl text-white`}
				>
					{horseName}
				</div>
			</div>

			{horsePlayers.map((player, index) => (
				<div className="flex w-full flex-row gap-3" key={index}>
					<div className="relative w-3/4">
						<input
							className="mb-1 h-14 w-full rounded-full bg-slate-200 pl-2 pr-12 text-center text-base font-bold text-black"
							placeholder="Navn"
							maxLength={20}
							value={player.name}
							onChange={e =>
								handlePlayerNameChange(index, e.target.value)
							}
						/>
						<button
							className="absolute right-2 h-full items-center "
							onClick={() => deletePlayer(index)}
						>
							<div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#979797] p-1 text-white hover:bg-stone-500">
								<CLOSE />
							</div>
						</button>
					</div>

					<input
						className="mb-1 h-14 w-1/4 rounded-full bg-slate-200 text-center text-base font-bold text-black"
						placeholder="#"
						type="text"
						pattern="[0-9]*"
						value={player.quantity}
						onChange={e => {
							//Restrict the input to numbers between 0 - 9 only
							const input = e.target;
							input.value = input.value.replace(/[^0-9]/g, '');
							handlePlayerQuantityChange(index, input.value);
						}}
					/>
				</div>
			))}
			<div className="flex w-full justify-center">
				<button
					onClick={addPlayer}
					className="flex items-center justify-center rounded-full bg-slate-200 p-3 shadow-lg hover:bg-slate-300"
				>
					<ADD fontSize="medium" />
				</button>
			</div>
		</div>
	);
};

export default SetupInputs;
