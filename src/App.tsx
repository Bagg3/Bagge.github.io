import React from "react";
import FrontPage from "./components/FrontPage";

function App() {
  // custom api hook

  //useffect

  //if(isloading) return <div>loading...</div>;

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-slate-600">
        <div className="FrontPage">
          <FrontPage />
        </div>
      </div>
    </>
  );
}

export default App;
