import React from 'react';
import { StepIndicator } from '../utility/stepBack';

interface StepBackArrayProps {
	stepBackArray: number[];
}

const StepBackArrayComponent: React.FC<StepBackArrayProps> = ({
	stepBackArray,
}) => {
	const getColor = (value: number) => {
		switch (value) {
			case StepIndicator.NoIndicator:
				return 'bg-[#E38E7A]';
			case StepIndicator.SleepingState:
				return 'bg-red-600';
			case StepIndicator.ActiveState:
				return 'bg-green-500';
			case StepIndicator.FinishedState:
				return 'bg-gray-500';
			default:
				return 'bg-black';
		}
	};

	return (
		<div className="z-10 flex w-[80%] justify-between ">
			{stepBackArray.map((value, index) => (
				<div
					key={index}
					className={`${getColor(value)} h-8 w-8 rounded-full`}
				/>
			))}
		</div>
	);
};

export default StepBackArrayComponent;
