export enum StepIndicator {
	NoIndicator = 0,
	SleepingState = 1,
	ActiveState = 2,
	FinishedState = 3,
}

interface Game {
	horse: number[];
	game_round: number;
	game_id: number;
	movement?: horseMovement;
}

interface horseMovement {
	horse_id: number;
	direction: string;
}

let activeRound = -1; // Add this line outside the function

export default function stepBackIndicator(
	gameObject: Game,
	stepBackArray: number[],
	setStepArray: React.Dispatch<React.SetStateAction<number[]>>,
	currentRound: number
) {
	// Check if any in the stepBackArray is active
	for (let i = 0; i < stepBackArray.length; i++) {
		if (stepBackArray[i] === StepIndicator.ActiveState) {
			// Only set to FinishedState if the game round has changed
			if (activeRound !== currentRound) {
				stepBackArray[i] = StepIndicator.FinishedState;
			}
		}
	}

	// Find min value in array in the horse array
	const lowestHorsePoints = Math.min(...gameObject.horse);
	if (stepBackArray[lowestHorsePoints] === 1 && lowestHorsePoints !== 0) {
		// Set the step indicator to active state
		stepBackArray[lowestHorsePoints] = StepIndicator.ActiveState;
		setStepArray([...stepBackArray]);
	}

	activeRound = currentRound;
}

export function resetStepBackArray(stepBackArray: number[]) {
	stepBackArray.fill(StepIndicator.NoIndicator, 0, 1);
	stepBackArray.fill(StepIndicator.SleepingState, 1, 7);
	stepBackArray.fill(StepIndicator.NoIndicator, 7, 8);
}
