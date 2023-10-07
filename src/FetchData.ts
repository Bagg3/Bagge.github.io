import DemoGame from "./DemoGame";

function FetchData(getDataFrom: any) {
  if (getDataFrom === DemoGame) return getDataFrom;

  const data = fetch("https://api.example.com/game");
  return data;
}

export default FetchData;
