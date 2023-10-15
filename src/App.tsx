import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import SetupGame from "./components/SetupGame";

function App() {
  // custom API hook

  // useEffect

  // if (isLoading) return <div>loading...</div>;

  return (
    <div className="bg-slate-600">
      <FrontPage />
    </div>
  );
}

export default App;

<Router>
  <div className="w-full h-screen flex justify-center bg-slate-600">
    <Route path="/" element={<FrontPage />} />
    <Route path="/setup" element={<SetupGame />} />
  </div>
</Router>;
