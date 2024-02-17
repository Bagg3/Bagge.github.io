/*****************************************
 API_Endpoint!!!
const API_Endpoint = '10.9.8.2/api/game/newest_game';
*****************************************/

// Array of objects, GameRound*4 long, with data from API
//import exampleData from './gameExample';
import getNewVirtualGameRound from './generateGameVirtual';

//let GameRound = 0;

export interface Game {
	horse: number[];
	game_round: number;
	game_id: number;
	movement?: horseMovement;
}

interface GameData {
	Horse_id: number;
	Game_id: number;
	Game_round: number;
	Color: string;
	Points: number;
}

interface horseMovement {
	horse_id: number;
	direction: string;
}

const game: Game = {
	horse: [0, 0, 0, 0],
	game_round: 0,
	game_id: 0,
	movement: {
		horse_id: 0,
		direction: '',
	},
};

// Function to fetch the data virtual
export async function fetchDataVirtual(): Promise<Game> {
	const gameData = getNewVirtualGameRound();

	getHorseMovDir(gameData, game);

	const correctData = filterData(
		gameData[gameData.length - 1].Game_round,
		gameData[gameData.length - 1].Game_round,
		gameData
	);

	updateGame(correctData, game);

	return game;
}

// Function to filter the data from the API, to only get the data from round X to round Y
function filterData(
	fromRound: number,
	toRound: number,
	rawGameData: GameData[]
) {
	const newData = rawGameData.filter(
		data => data.Game_round === fromRound || data.Game_round === toRound
	);
	return newData;
}

// Function to fetch the game data from the API
export const fetchGameBoard = async (
	expectedRound: number
): Promise<Game | undefined> => {
	try {
		const gameData: GameData[] = await getDataFromAPI();

		if (checkForNewGame(gameData, game)) {
			newGameID(gameData, game);
			return game;
		}

		// Filter the data get the newest and previous round
		const dataToGetMovement = filterData(
			expectedRound - 1,
			expectedRound,
			gameData
		);
		getHorseMovDir(dataToGetMovement, game);

		// Filter the data to get the newest round
		const newestRound = filterData(expectedRound, expectedRound, gameData);

		// If the data is not undefined, update the game object
		if (newestRound) {
			updateGame(newestRound, game);
		}

		return game;
	} catch (error) {
		console.error('Error in fetchGame:', error);
		return undefined;
	}
};

export async function getDataFromAPI(): Promise<GameData[]> {
	const API_Endpoint = 'http://10.9.8.2:8080/api/newest_game';

	const data = await fetch(API_Endpoint, {
		method: 'GET',
		mode: 'cors',
	})
		.then(response => {
			return response.json();
		})
		.catch(error => {
			console.error('There was an error:', error);
		});

	return data;

	//return exampleData[GameRound++];
}

// Function to update the game object with the newest data from the API
function updateGame(fetchedGame: GameData[], game: Game) {
	//Update to newest game
	game.game_round = fetchedGame[fetchedGame.length - 1].Game_round;
	game.game_id = fetchedGame[fetchedGame.length - 1].Game_id;

	for (let i = 0; i < game.horse.length; i++) {
		if (fetchedGame[i].Horse_id === i + 1) {
			game.horse[i] = fetchedGame[i].Points;
		}
	}
}

// Function to check if the game is new (new game_id)
function checkForNewGame(fetchedGame: GameData[], game: Game) {
	if (fetchedGame[fetchedGame.length - 1].Game_id !== game.game_id) {
		return true;
	}

	return false;
}

// Function to set the new game_id
function newGameID(fetchedGame: GameData[], game: Game) {
	console.log('NEW GAME ID');
	game.game_id = fetchedGame[0].Game_id;
	game.game_round = 1;
	game.horse = [0, 0, 0, 0];
	game.movement = {
		horse_id: 0,
		direction: '',
	};
}

function getHorseMovDir(fetchedGame: GameData[], game: Game) {
	// Round 1, so no previous data to compare with
	if (fetchedGame[fetchedGame.length - 1].Game_round === 1) {
		if (game.movement) {
			game.movement.horse_id = 0;
			game.movement.direction = ' ';
		}
		return;
	}

	const horseMap = new Map();
	for (let i = 0; i < fetchedGame.length / 2; i++) {
		horseMap.set(fetchedGame[i].Horse_id, fetchedGame[i].Points);
	}

	// Check if the horse has moved forward or backwards and set the movement
	for (let i = fetchedGame.length / 2; i < fetchedGame.length; i++) {
		const currentHorseId = fetchedGame[i].Horse_id;
		const currentPoints = fetchedGame[i].Points;

		const previousPoints = horseMap.get(currentHorseId);
		if (previousPoints !== undefined && previousPoints !== currentPoints) {
			if (game.movement === undefined) {
				handleDirection(0);
				return;
			}

			const difference = currentPoints - previousPoints;

			if (difference === 0) return;

			game.movement.horse_id = currentHorseId;
			game.movement.direction = handleDirection(difference);
		}
	}
}

// Function to handle the direction of the horse
function handleDirection(points: number) {
	switch (points) {
		case -1:
			return 'rykker tilbage';
		case 1:
			return 'rykker frem';
		default:
			return 'rykker';
	}
}

/*
export function fetchColor(oldGame: Game, newGame: Game) {
	for (let i = 0; i < newGame.horse.length; i++) {
		if (newGame.horse[i] !== oldGame.horse[i]) {
			return handleColor(i);
		}
	}
	return 'No change';
}

function handleColor(colorValue: number) {
	switch (colorValue) {
		case 0:
			return 'red';
		case 1:
			return 'blue';
		case 2:
			return 'green';
		case 3:
			return 'yellow';
		default:
			return 'red';
	}
}
*/
