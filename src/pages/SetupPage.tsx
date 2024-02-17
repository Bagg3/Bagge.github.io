import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SetupInputs from '../components/SetupInputs';
import { usePlayerData } from '../components/PlayerDataContext';
import { resetGame } from '../utility/generateGameVirtual';
import { Player } from '../utility/types';

interface HorseInput {
	horseName: string;
	horseColor: string;
}

const SetupPage: React.FC = () => {
	const { players, setPlayers } = usePlayerData();
	const inputs: HorseInput[] = [
		{ horseName: 'Hest 1', horseColor: 'bg-red-500' },
		{ horseName: 'Hest 2', horseColor: 'bg-yellow-400' },
		{ horseName: 'Hest 3', horseColor: 'bg-green-500' },
		{ horseName: 'Hest 4', horseColor: 'bg-blue-500' },
	];

	const handlePlayersChange = (
		updatedPlayers: Player[],
		horseName: string
	): void => {
		const existingPlayers = players.filter(p => p.horse === horseName);

		const isDifferent =
			existingPlayers.length !== updatedPlayers.length ||
			existingPlayers.some((player, index) => {
				const updatedPlayer = updatedPlayers[index];
				return (
					!updatedPlayer ||
					player.name !== updatedPlayer.name ||
					player.quantity !== updatedPlayer.quantity
				);
			});

		if (isDifferent) {
			const newPlayers = players
				.filter(p => p.horse !== horseName)
				.concat(updatedPlayers);
			setPlayers(newPlayers);
		}
	};

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
			<Link to="/" className="absolute left-3 top-3">
				<button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
					<ArrowBackIcon />
				</button>
			</Link>
			<h1 className="mb-5 text-4xl font-bold text-white">Setup Spil</h1>

			<div className="scrollbar-hide mb-5 grid h-[70%] w-[88%] grid-cols-4 flex-row gap-2 overflow-y-scroll rounded-[25px] bg-[#be4b32] p-4 shadow-lg">
				{inputs.map((input, index) => (
					<div
						key={index}
						className="h-full w-full grid-flow-row rounded-xl"
					>
						<SetupInputs
							inputs={input}
							onPlayersChange={handlePlayersChange}
						/>
					</div>
				))}
			</div>

			<div>
				<Link to="/game">
					<button
						className="mb-5 h-16 w-72 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a]"
						onClick={resetGame}
					>
						Start Spil
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SetupPage;
