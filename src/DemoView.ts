import DemoGame, { Demogame } from "./DemoGame";
import FetchData from "./DemoFetchData";

const gameData = DemoGame();
const data = FetchData({ host: "", API: false, game: gameData });

updateGame(data);

function updateGame(data: any) {
  console.log(data);
}
