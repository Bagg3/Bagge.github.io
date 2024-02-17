export interface Game {
	horse: number[];
	game_round: number;
	game_id: number;
	movement?: horseMovement;
}

export interface GameData {
	Horse_id: number;
	Game_id: number;
	Game_round: number;
	Color: string;
	Points: number;
}

export interface horseMovement {
	horse_id: number;
	direction: string;
}

export interface Player {
	name: string;
	quantity: string;
	horse: string;
}
