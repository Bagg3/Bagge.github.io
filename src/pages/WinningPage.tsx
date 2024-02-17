import { Link } from 'react-router-dom';
import { resetGame } from '../utility/generateGameVirtual';
import { usePlayerData } from '../components/PlayerDataContext';

function WinningPage() {
	const { players, horseRanks } = usePlayerData();

	const firstPlacePlayers = players.filter(
		player => player.horse.slice('Hest '.length) === horseRanks[0]
	);
	const secondPlacePlayers = players.filter(
		player => player.horse.slice('Hest '.length) === horseRanks[1]
	);
	const thirdPlacePlayers = players.filter(
		player => player.horse.slice('Hest '.length) === horseRanks[2]
	);
	const loosingPlayers = players.filter(
		player => player.horse.slice('Hest '.length) === horseRanks[3]
	);

	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
			<h1 className="text-6xl font-bold text-[#f3f3f3]">TILLYKKE!</h1>

			<div className="my-5 flex h-[60%] w-[60%] justify-center rounded-lg bg-[#d65639]">
				<div className="m-6 flex flex-auto flex-col items-center overflow-auto rounded-md bg-[#f8faf81d] p-4 pt-7 shadow-md">
					{/* Display first place players */}
					{firstPlacePlayers.map(player => (
						<div
							className="my-1 flex w-[95%] items-center justify-center rounded-md bg-[#1ec326] text-center text-lg font-bold text-white shadow-md transition-all hover:scale-[102%]"
							key={player.name}
						>
							{player.name} må uddele{' '}
							{Number(player.quantity) * 2} slurke
						</div>
					))}
					{/* Display second place players */}
					{secondPlacePlayers.map(player => (
						<div
							className="my-1 flex w-[95%] items-center justify-center rounded-md bg-[#98df1ea3] text-center text-lg font-bold text-white shadow-md transition-all hover:scale-[102%]"
							key={player.name}
						>
							{player.name} må uddele {Number(player.quantity)}{' '}
							slurke
						</div>
					))}
					{/* Display third place players */}
					{thirdPlacePlayers.map(player => (
						<div
							className="my-1 flex w-[95%] items-center justify-center rounded-md bg-[#fd9a36e6] text-center text-lg font-bold text-white shadow-md transition-all hover:scale-[102%]"
							key={player.name}
						>
							{player.name} skal ikke gøre noget
						</div>
					))}
					{/* Display second place players */}
					{loosingPlayers.map(player => (
						<div
							className="my-1 flex w-[95%] items-center justify-center rounded-md bg-[#f82323c1] text-center text-lg font-bold text-white shadow-md transition-all hover:scale-[102%]"
							key={player.name}
						>
							{player.name} skal drikke {Number(player.quantity)}{' '}
							slurke
						</div>
					))}
				</div>
			</div>

			<div className="mb-12 grid grid-cols-3 flex-row gap-8">
				<Link to="/">
					<button className="mt-6 h-16 w-64 grid-flow-row rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]">
						Hovedmenu
					</button>
				</Link>

				<Link to="/game">
					<button
						onClick={resetGame}
						className="mt-6 h-16 w-64 grid-flow-row rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]"
					>
						Spil igen
					</button>
				</Link>

				<Link to="/setup">
					<button className="mt-6 h-16 w-64 grid-flow-row rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]">
						Setup
					</button>
				</Link>
			</div>
		</div>
	);
}

export default WinningPage;
