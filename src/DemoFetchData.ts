import { Demogame, DemoGame } from "./DemoGame";

interface data_host {
  host: string;
  API: boolean;
  // Game is optional
  game: Demogame | undefined;
}

function FetchData(getDataFrom: data_host) {
  if (getDataFrom.API) {
    const data = fetch("https://api.example.com/game");
    return data;
  } else {
    const data = DemoGame();
    return data;
  }
}

export default FetchData;
