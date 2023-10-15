import { useEffect, useState } from "react";
import FrontPage from "./components/FrontPage";
import SetupGame from "./components/SetupGame";

function App() {
  // custom api hook

  //useEffect

  //if(isloading) return <div>loading...</div>;

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-slate-600">
        <div className="FrontPage">
          <FrontPage />
        </div>
        <div className="SetupGame">
          <SetupGame />
        </div>
      </div>
    </>
  );
}

export default App;
