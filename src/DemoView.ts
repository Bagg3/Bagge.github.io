import DemoGame from "./DemoGame";
import FetchData from "./DemoFetchData";

const gameData = DemoGame();
const data = FetchData(gameData);

updateGame(data);

function updateGame(data: any) {
  console.log(data);
}
