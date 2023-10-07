function DemoGame() {
  // Return a game object
  const game = {
    horse_id: "int",
    points: "int",
    color: "string",
    game_round: "int",
    game_id: "int",
  };

  return game;
}

export default DemoGame;

interface Demogame {
  horse_id: string;
  points: string;
  color: string;
  game_round: string;
  game_id: string;
}

export type { Demogame };
