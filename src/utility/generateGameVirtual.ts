interface GameData {
	Horse_id: number;
	Game_id: number;
	Game_round: number;
	Color: string;
	Points: number;
}

export interface GameVirtual extends Array<GameData> {}

enum MoveDirection {
	NoMove = 0,
	MoveForward = 1,
	MoveBackward = -1,
}

// Array to pick a random card from
const cardArray = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
	2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4,
];

// Array to check if the horse should move backwards
const stepBackArray = [0, 1, 1, 1, 1, 1, 1, 1];

const currentGameData: GameVirtual = [
	{
		Horse_id: 1,
		Game_id: 1,
		Game_round: 1,
		Color: 'red',
		Points: 0,
	},
	{
		Horse_id: 2,
		Game_id: 1,
		Game_round: 1,
		Color: 'yellow',
		Points: 0,
	},
	{
		Horse_id: 3,
		Game_id: 1,
		Game_round: 1,
		Color: 'green',
		Points: 0,
	},
	{
		Horse_id: 4,
		Game_id: 1,
		Game_round: 1,
		Color: 'blue',
		Points: 0,
	},
];

// Function to generate a new game round
export default function getNewVirtualGameRound(): GameVirtual {
	// Save the last game round filtered by the highest game round
	const prevGameRound: GameVirtual = currentGameData.map(horse => ({
		...horse,
	}));
	// Create a new game round
	generateRound();

	// Return the new game round (prevGameRound + newGameData
	const newGameData: GameVirtual = [...currentGameData];

	return [...prevGameRound, ...newGameData];
}

// Function to generate a new game round
function generateRound(): void {
	// Update the game round for each horse (GameData object)
	currentGameData.forEach(horse => {
		horse.Game_round += 1;
	});

	// Pick a random horse
	const pickedHorse = generateHorse();

	// Check if the horse should move forward or backwards
	const moveDir = generateMoveDir();

	updateHorsePoints(currentGameData[pickedHorse - 1], moveDir);
}

// Function to update the horse points
function updateHorsePoints(
	currentGameData: GameData,
	moveDir: MoveDirection
): void {
	if (moveDir === MoveDirection.NoMove) {
		return;
	} else if (moveDir === MoveDirection.MoveForward) {
		currentGameData.Points += 1;
	} else if (moveDir === MoveDirection.MoveBackward) {
		currentGameData.Points -= 1;
	}
	return;
}

// Function to generate a random horse from the cardArray
function generateHorse(): number {
	let cardVal: number;
	let cardIndex: number;

	// Pick a random card from the cardArray until the card is not equal to 7 (the horse has already reached the finish line)
	do {
		cardIndex = Math.floor(Math.random() * cardArray.length);
		cardVal = cardArray[cardIndex];
	} while (currentGameData[cardVal - 1].Points === 7);

	// Remove the card from the cardArray
	cardArray.splice(cardIndex, 1);
	return cardVal;
}

// Function to generate the direction of the horse (forward or backwards) based on the lowest horse points
function generateMoveDir(): MoveDirection {
	// Get the lowest horse points
	const lowestHorsePoints = Math.min(
		currentGameData[0].Points,
		currentGameData[1].Points,
		currentGameData[2].Points,
		currentGameData[3].Points
	);

	// Check if the horse should move forward or backwards
	if (stepBackArray[lowestHorsePoints] === 1 && lowestHorsePoints !== 0) {
		stepBackArray[lowestHorsePoints] = 0;
		return MoveDirection.MoveBackward;
	}

	return MoveDirection.MoveForward;
}

function resetArrays() {
	// Reset the stepBeckArray
	stepBackArray.fill(1);
	stepBackArray[0] = 0;

	// Reset the cardArray to the original size 48
	cardArray.length = 52;

	// Fill the first 13 elements with 1
	cardArray.fill(1, 0, 13);

	// Fill the next 13 elements with 2
	cardArray.fill(2, 13, 26);

	// Fill the next 13 elements with 3
	cardArray.fill(3, 26, 39);

	// Fill the last 13 elements with 4
	cardArray.fill(4, 39, 52);
}

export function resetGame() {
	// Reset the currentGameData to a new game
	currentGameData.forEach(horse => {
		horse.Game_id += 1;
		horse.Game_round = 1;
		horse.Points = 0;
	});

	// Reset the arrays
	resetArrays();
}
