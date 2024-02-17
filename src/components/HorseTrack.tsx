import React, { useEffect, useState, useRef } from 'react';
import HorseGraphicBlue from '../assets/images/horse-graphic-blue.png';
import HorseGraphicRed from '../assets/images/horse-graphic-red.png';
import HorseGraphicYellow from '../assets/images/horse-graphic-yellow.png';
import HorseGraphicGreen from '../assets/images/horse-graphics-green.png';

interface Position {
	top: number;
	left: number;
}

// Component which represents a single position on the track
const TrackPosition: React.FC = () => (
	<div className="track-position aspect-square w-8 rounded-full bg-[#be4b32]"></div>
);

const HorseTrack: React.FC<{
	positionIndex: number;
	color: string;
	numberOfPositions: number;
}> = ({ positionIndex, color, numberOfPositions }) => {
	const [positions, setPositions] = useState<Position[]>([]);
	const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
	const movableRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);

	// Handles the track positions
	useEffect(() => {
		// Collects the top and left positions of all track positions
		const collectPositions = () => {
			if (containerRef.current) {
				const divs =
					containerRef.current.querySelectorAll('.track-position');
				if (divs) {
					const positionsArray: Position[] = Array.from(divs).map(
						div => {
							const position = (
								div as HTMLElement
							).getBoundingClientRect();
							// Calculate the center position
							const centerX = position.left + position.width / 2;
							const centerY = position.top + position.height / 2;
							return {
								top: centerY,
								left: centerX,
							};
						}
					);
					setPositions(positionsArray);
				}
			}
		};

		collectPositions();

		setCurrentPositionIndex(positionIndex);

		window.addEventListener('resize', collectPositions);

		return () => {
			window.removeEventListener('resize', collectPositions);
		};
	}, []);

	useEffect(() => {
		setCurrentPositionIndex(positionIndex);
	}, [positionIndex]);

	// Updates and handles the movable's position
	useEffect(() => {
		const handleMovablePosition = () => {
			if (
				containerRef.current &&
				movableRef.current &&
				positions.length > 0
			) {
				const newPosition = positions[currentPositionIndex];

				// Calculates the movable's top and left properties relative to the container
				const containerPosition =
					containerRef.current.getBoundingClientRect();

				const newStyle: React.CSSProperties = {
					top: `${newPosition.top - containerPosition.top}px`,
					left: `${newPosition.left - containerPosition.left}px`,
				};
				Object.assign(movableRef.current.style, newStyle);
			}
		};

		handleMovablePosition();
	}, [currentPositionIndex, positions]);

	const handleBackgroundColor = (): string => {
		if (movableRef.current) {
			switch (color) {
				case 'red':
					return 'bg-red-500';
				case 'blue':
					return 'bg-blue-500';
				case 'green':
					return 'bg-green-500';
				case 'yellow':
					return 'bg-yellow-500';
			}
		}
		return 'bg-white';
	};

	const handleHorseGraphic = () => {
		if (movableRef.current) {
			switch (color) {
				case 'red':
					return HorseGraphicRed;
				case 'blue':
					return HorseGraphicBlue;
				case 'green':
					return HorseGraphicGreen;
				case 'yellow':
					return HorseGraphicYellow;
			}
		}
		return 'bg-white';
	};

	return (
		<div
			className="relative flex w-[80%] items-center justify-between"
			ref={containerRef}
		>
			<div className="absolute left-1/2 top-1/2 h-2 w-[95%] translate-x-[-50%] translate-y-[-50%] transform bg-[#be4b32]"></div>
			<div
				ref={movableRef}
				className={`${handleBackgroundColor()} absolute flex aspect-square w-14 -translate-x-[50%] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full border border-white shadow-lg`}
			>
				<img
					src={handleHorseGraphic()}
					alt="Horse Graphic"
					className=" translate-x-[10%] scale-[170%]"
				/>
			</div>

			<div className="flex w-full items-center justify-between gap-5">
				{[...Array(numberOfPositions)].map((_, index) => (
					<TrackPosition key={index} />
				))}
			</div>
		</div>
	);
};

export default HorseTrack;
