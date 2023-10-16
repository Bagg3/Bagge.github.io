import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import SetupGame from "./components/SetupGame";

function App() {
  // custom API hook

  // useEffect

  // if (isLoading) return <div>loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/setup" element={<SetupGame />} />
      </Routes>
    </Router>
  );
}

export default App;
