import React, { useState } from 'react';

interface VirtualGameButtonsProps {
	onStepClick: () => void;
	onResetClick: () => void;
}

const VirtualGameButtons: React.FC<VirtualGameButtonsProps> = ({
	onStepClick,
	onResetClick,
}) => {
	const [stepButtonDisabled, setStepButtonDisabled] = useState(false);
	const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

	const handleStepClick = () => {
		if (!stepButtonDisabled) {
			onStepClick();
			setStepButtonDisabled(true);
			setTimeout(() => setStepButtonDisabled(false), 1100);
		}
	};

	const handleResetClick = () => {
		if (!resetButtonDisabled) {
			onResetClick();
			setResetButtonDisabled(true);
			setTimeout(() => setResetButtonDisabled(false), 750);
		}
	};

	return (
		<div>
			<button
				onClick={handleStepClick}
				className={`mx-10 mb-2 h-16 w-56 gap-4 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a] ${
					stepButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
				}`}
				disabled={stepButtonDisabled}
			>
				Step
			</button>
			<button
				onClick={handleResetClick}
				className={`mx-10 mb-2 h-16 w-56 gap-4 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a] ${
					resetButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
				}`}
				disabled={resetButtonDisabled}
			>
				Reset
			</button>
		</div>
	);
};

export default VirtualGameButtons;

/*

ANOTHER WAY OF DOING IT: IDK WHICH ONE IS BETTER

import React, { useState, useEffect } from 'react';

interface VirtualGameButtonsProps {
  onStepClick: () => void;
  onResetClick: () => void;
}

const VirtualGameButtons: React.FC<VirtualGameButtonsProps> = ({
  onStepClick,
  onResetClick,
}) => {
  const [stepButtonDisabled, setStepButtonDisabled] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(false);

  const handleClick = (clickHandler: () => void, setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (!setButtonDisabled) return;

    clickHandler();
    setButtonDisabled(true);

    setTimeout(() => {
      setButtonDisabled(false);
    }, 1000);
  };

  return (
    <div>
      <button
        onClick={() => handleClick(onStepClick, setStepButtonDisabled)}
        className={`mx-10 mb-2 h-16 w-56 gap-4 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a] ${stepButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={stepButtonDisabled}
      >
        Step
      </button>
      <button
        onClick={() => handleClick(onResetClick, setResetButtonDisabled)}
        className={`mx-10 mb-2 h-16 w-56 gap-4 rounded-full bg-[#d65639] text-2xl font-bold text-white shadow-lg hover:bg-[#da644a] ${resetButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={resetButtonDisabled}
      >
        Reset
      </button>
    </div>
  );
};

export default VirtualGameButtons;

*/
