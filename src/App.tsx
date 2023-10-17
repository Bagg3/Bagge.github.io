import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import SetupGame from './pages/SetupGame';
import Game from './pages/Game';
import SetupGameCHATGPT from './pages/CHATGPT';

function App() {
  // custom API hook

  // useEffect

  // if (isLoading) return <div>loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/setup" element={<SetupGame />} />
        <Route path="/game" element={<Game />} />
        <Route path="/setupGPT" element={<SetupGameCHATGPT />} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
