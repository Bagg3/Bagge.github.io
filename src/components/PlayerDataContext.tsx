import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Player } from '../utility/types';

interface PlayerDataContextType {
	players: Player[];
	setPlayers: (players: Player[]) => void;
	clearPlayers: () => void; // Add clearPlayers function signature
	horseRanks: string[];
	setHorseRanks: (horses: string[]) => void;
}

const PlayerDataContext = createContext<PlayerDataContextType>({
	players: [],
	setPlayers: () => {},
	clearPlayers: () => {},
	horseRanks: [],
	setHorseRanks: () => {},
});

interface PlayerDataProviderProps {
	children: ReactNode;
}

export const PlayerDataProvider: React.FC<PlayerDataProviderProps> = ({
	children,
}) => {
	const [players, setPlayers] = useState<Player[]>([]);
	const [horseRanks, setHorseRanks] = useState<string[]>([]);

	const clearPlayers = () => setPlayers([]);

	return (
		<PlayerDataContext.Provider
			value={{
				players,
				setPlayers,
				clearPlayers,
				horseRanks,
				setHorseRanks,
			}}
		>
			{children}
		</PlayerDataContext.Provider>
	);
};

export const usePlayerData = () => useContext(PlayerDataContext);

export default PlayerDataContext;
