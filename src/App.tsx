import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import Game from './pages/GamePage';
import SetupPage from './pages/SetupPage';
import WinningPage from './pages/WinningPage';
import { PlayerDataProvider } from './components/PlayerDataContext';

function App() {
	const [fetchFromAPI, setfetchFromAPI] = useState(false);

	const updatefetchFromAPI = (value: boolean) => {
		setfetchFromAPI(value);
	};

	return (
		<PlayerDataProvider>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<FrontPage setfetchFromAPI={updatefetchFromAPI} />
						}
					/>
					<Route path="/setup" element={<SetupPage />} />
					<Route
						path="/game"
						element={<Game fetchFromAPI={fetchFromAPI} />}
					/>
					<Route path="/winning" element={<WinningPage />} />
					<Route path="/*" element={<div>404</div>} />
				</Routes>
			</Router>
		</PlayerDataProvider>
	);
}

export default App;
