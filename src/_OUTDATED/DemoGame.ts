export type { Demogame, Game };

interface Demogame {
	horse_id: number;
	points: number;
	color: string;
	game_round: string;
	game_id: string;
}

interface Game {
	horse1: number;
	horse2: number;
	horse3: number;
	horse4: number;
	game_round: number;
	game_id: number;
}

export function DemoGame() {
	// Return a game object
	const game = {
		horse_id: 'int',
		points: 'int',
		color: 'string',
		game_round: 'int',
		game_id: 'int',
	};

	return game;
}

export function game(CurrentGame: Game) {
	const selectedHorse = getNewHorse(CurrentGame);

	// Update the selected horse's points
	switch (selectedHorse) {
		case 1:
			CurrentGame.horse1 += 1;
			break;
		case 2:
			CurrentGame.horse2 += 1;
			break;
		case 3:
			CurrentGame.horse3 += 1;
			break;
		case 4:
			CurrentGame.horse4 += 1;
			break;
	}

	CurrentGame.game_round += 1;

	return CurrentGame;
}

function getNewHorse(gameData: Game) {
	const totalPoints =
		gameData.horse1 + gameData.horse2 + gameData.horse3 + gameData.horse4;

	// Calculate the weights for each horse based on their points
	const maxCardValue = 12;
	const weights = [
		(maxCardValue - gameData.horse1) / (maxCardValue * 4 - totalPoints),
		(maxCardValue - gameData.horse2) / (maxCardValue * 4 - totalPoints),
		(maxCardValue - gameData.horse3) / (maxCardValue * 4 - totalPoints),
		(maxCardValue - gameData.horse4) / (maxCardValue * 4 - totalPoints),
	];

	// Calculate the cumulative weights
	const cumulativeWeights = [];
	let sum = 0;
	for (const weight of weights) {
		sum += weight;
		cumulativeWeights.push(sum);
	}

	// Generate a random number between 0 and 1
	const random = Math.random();

	// Determine which horse is selected based on cumulative weights
	let selectedHorse = 1;
	for (let i = 0; i < cumulativeWeights.length; i++) {
		if (random < cumulativeWeights[i]) {
			selectedHorse = i + 1;
			break;
		}
	}
	return selectedHorse;
}
