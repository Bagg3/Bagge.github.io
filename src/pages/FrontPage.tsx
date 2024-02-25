import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoverArt from '../assets/images/cover-art.jpeg';
import { usePlayerData } from '../components/PlayerDataContext';

interface FrontPageProps {
	setfetchFromAPI: (value: boolean) => void;
}

const FrontPage: React.FC<FrontPageProps> = ({ setfetchFromAPI }) => {
	const { clearPlayers } = usePlayerData();
	useEffect(() => {
		clearPlayers();
	}, []);

	/*
	const handleClickBoard = () => {
		setfetchFromAPI(true);
	};
	*/

	const handleClickVirtual = () => {
		setfetchFromAPI(false);
	};
	return (
		<div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-[#C34629] via-[#C34629] to-[#225C70]">
			<h1 className="text-6xl font-bold text-[#f3f3f3]">
				Hestevæddeløbet
			</h1>
			<img
				src={CoverArt}
				className="my-7 aspect-square w-[20%] rounded-full bg-cover bg-center shadow-lg"
				alt="Cover Art"
			/>
			{/* 
			<Link to="/setup" state={{ fetchFromAPI: true }}>
				<button
					onClick={handleClickBoard}
					className="mb-7 h-20 w-64 rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]"
				>
					Spil med board
				</button>
			</Link>
			*/}

			<Link to="/setup" state={{ fetchFromAPI: false }}>
				<button
					onClick={handleClickVirtual}
					className="my-16 h-20 w-64 rounded-full bg-[#d65639] text-xl font-bold text-[#e4e4e4] shadow-lg hover:bg-[#da644a]"
				>
					Start spillet
				</button>
			</Link>

			{/*<button className="h-16 w-64 rounded-full bg-[#8d402f] text-xl font-bold text-[#e4e4e4] shadow-lg">
				Leaderboard
			</button> */}
		</div>
	);
};

export default FrontPage;
