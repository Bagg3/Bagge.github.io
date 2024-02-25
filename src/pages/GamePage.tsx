import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Home from '@mui/icons-material/Home';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import CardAnim from '../components/CardAnim';
import HorseTrack from '../components/HorseTrack';
import {
	Game,
	fetchGameBoard,
	fetchDataVirtual,
} from '../utility/fetchGameData';
import { useNavigate } from 'react-router-dom';
import VirtualGameButtons from '../components/VirtualGameButtons';
import { resetGame } from '../utility/generateGameVirtual';
import { usePlayerData } from '../components/PlayerDataContext';
import stepBackIndicator from '../utility/stepBack';
import { StepIndicator, resetStepBackArray } from '../utility/stepBack';
import StepBackArrayComponent from '../components/StepBackIndicator';

const GamePage: React.FC<{ fetchFromAPI: boolean }> = ({ fetchFromAPI }) => {
	const [game, setGame] = useState<Game>({
		horse: [0, 0, 0, 0],
		game_round: 0,
		game_id: 0,
		movement: {
			horse_id: 0,
			direction: '',
		},
	});

	const numberOfPositions = 8;
	const navigate = useNavigate();

	const gameRef = useRef(game);
	useEffect(() => {
		gameRef.current = game;
	}, [game]);

	const [stepBackArray, setStepBackArray] = useState<number[]>([
		StepIndicator.NoIndicator,
		StepIndicator.SleepingState,
		StepIndicator.SleepingState,
		StepIndicator.SleepingState,
		StepIndicator.SleepingState,
		StepIndicator.SleepingState,
		StepIndicator.SleepingState,
		StepIndicator.NoIndicator,
	]);
	stepBackIndicator(game, stepBackArray, setStepBackArray, game.game_round);

	const [stepClicked, setStepClicked] = useState(false);
	const [resetClicked, setResetClicked] = useState(false);
	const handleStepClick = () => {
		if (!stepClicked) {
			setStepClicked(true);
		}
	};
	const handleResetClick = () => {
		if (!resetClicked) {
			setResetClicked(true);
		}
	};

	const [winningHorses, setWinningHorses] = useState<string[]>([]);
	const [winningHorse, setWinningHorse] = useState<string | undefined>(
		undefined
	);

	const maxWinningHorses = 3;
	const { setHorseRanks } = usePlayerData();
	const [horsePositionsArray, setHorsePositionsArray] = useState([
		0, 0, 0, 0,
	]);

	useEffect(() => {
		setHorsePositionsArray(game.horse);

		// Find the next ranking horse
		const nextRankingWinningHorse = game.horse
			.map((position, index) => ({
				position,
				id: (index + 1).toString(),
			}))
			.filter(horse => horse.position === numberOfPositions - 1)
			.map(horse => horse.id)
			.find(id => !winningHorses.includes(id));

		// Add the next ranking horse to winningHorses array
		if (nextRankingWinningHorse) {
			setWinningHorses(prevWinningHorses => [
				...prevWinningHorses,
				nextRankingWinningHorse,
			]);
			setWinningHorse(nextRankingWinningHorse);
		}
	}, [game, winningHorses, numberOfPositions]);

	const [hasWon, setHasWon] = useState(false);

	useEffect(() => {
		if (winningHorses.length < maxWinningHorses || hasWon) return;

		// Add the rest of the horses to the back of the winningHorses array
		const remainingHorses = horsePositionsArray
			.map((position, index) => ({
				position,
				id: (index + 1).toString(),
			}))
			.filter(horse => horse.position !== numberOfPositions - 1)
			.map(horse => horse.id);

		const updatedWinningHorses = [...winningHorses, ...remainingHorses];
		setWinningHorses(updatedWinningHorses);
		setHorseRanks(updatedWinningHorses);

		// Delay by 1 second before navigating to the winning page
		setTimeout(() => {
			navigate('/winning');
		}, 1000);

		setHasWon(true);
	}, [winningHorses, hasWon]);

	// Always set Fetch from API to be false
	fetchFromAPI = false;

	// Fetch game data from backend periodically with a second interval
	useEffect(() => {
		if (fetchFromAPI) {
			const interval = setInterval(() => {
				fetchGameBoard(gameRef.current.game_round + 1).then(newGame => {
					if (newGame) {
						setGame({ ...newGame });
					}
				});
			}, 1250);
			return () => clearInterval(interval);
		}
		// Fetch data from virtual game when fetchFromAPI is false
		else if (stepClicked && !fetchFromAPI) {
			fetchDataVirtual().then(newGame => {
				if (newGame) {
					setGame({ ...newGame });
					// Reset stepClicked after fetching data
					setStepClicked(false);
				}
			});
			// Update the stepBackArray when stepClicked is true
			stepBackIndicator(
				game,
				stepBackArray,
				setStepBackArray,
				game.game_round
			);
		}
	}, [fetchFromAPI, stepClicked, game.game_round]);

	// Reset game data when reset button is clicked
	useEffect(() => {
		if (resetClicked) {
			setGame({
				horse: [0, 0, 0, 0],
				game_round: 0,
				game_id: 0,
				movement: {
					horse_id: 0,
					direction: '',
				},
			});
			resetGame();
			resetStepBackArray(stepBackArray);
			setWinningHorses([]);
			setWinningHorse(undefined);
			setResetClicked(false);
		}
	}, [resetClicked]);

	const [showCard, setShowCard] = useState(true);

	useEffect(() => {
		setShowCard(true); // Set showCard to true whenever game.game_round changes
	}, [game.game_round]);

	return (
		<>
			<div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
				<Link to="/setup" className="absolute left-3 top-3">
					<button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
						<ArrowBackIcon />
					</button>
				</Link>
				<h1 className="mb-5 text-4xl font-bold text-[#f1f1f1]">
					Hestevæddeløbet
				</h1>
				<Link to="/" className="absolute right-3 top-3">
					<button className="flex aspect-square w-12 items-center justify-center rounded-full bg-[#9a3925] text-lg font-bold text-white shadow-lg hover:bg-[#da644a]">
						<Home />
					</button>
				</Link>
				<div className="mb-5 flex h-[70%] w-[65%] flex-col items-center justify-center gap-14 rounded-lg bg-[#d65639] shadow-lg">
					<div className="absolute h-[55%] w-[55%] rounded-lg bg-[#ffffff54] shadow-lg"></div>
					<StepBackArrayComponent stepBackArray={stepBackArray} />
					<HorseTrack
						positionIndex={horsePositionsArray[0]}
						color="red"
						numberOfPositions={numberOfPositions}
					/>
					<HorseTrack
						positionIndex={horsePositionsArray[1]}
						color="yellow"
						numberOfPositions={numberOfPositions}
					/>
					<HorseTrack
						positionIndex={horsePositionsArray[2]}
						color="green"
						numberOfPositions={numberOfPositions}
					/>
					<HorseTrack
						positionIndex={horsePositionsArray[3]}
						color="blue"
						numberOfPositions={numberOfPositions}
					/>
				</div>

				{game.movement?.horse_id !== 0 && showCard && (
					<CardAnim
						game={game}
						setShowCard={setShowCard}
						winningHorse={winningHorse}
						setWinningHorse={setWinningHorse}
					/>
				)}

				<div className="flex flex-col items-center justify-center gap-14 gap-x-12">
					{!fetchFromAPI && (
						<VirtualGameButtons
							onStepClick={handleStepClick}
							onResetClick={handleResetClick}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default GamePage;
