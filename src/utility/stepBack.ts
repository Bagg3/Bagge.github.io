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

export default function stepBackIndicator(
	gameObject: Game,
	stepBackArray: number[],
	setStepArray: React.Dispatch<React.SetStateAction<number[]>>
) {
	// Check if any in the stepBackArray is active
	for (let i = 0; i < stepBackArray.length; i++) {
		if (stepBackArray[i] === StepIndicator.ActiveState) {
			stepBackArray[i] = StepIndicator.FinishedState;
		}
	}

	//Find min value in array in the horse array
	const lowestHorsePoints = Math.min(...gameObject.horse);
	if (stepBackArray[lowestHorsePoints] === 1 && lowestHorsePoints !== 0) {
		// Set the step indicator to active state
		stepBackArray[lowestHorsePoints] = StepIndicator.ActiveState;
		setStepArray([...stepBackArray]);
	}
}

export function resetStepBackArray(stepBackArray: number[]) {
	stepBackArray.fill(StepIndicator.SleepingState);
}
