import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
  colorClass: string;
}

function CustomDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null); // Initialize as null

  const options = [
    { value: 'option1', label: 'Hest 1', colorClass: 'bg-red-500' },
    { value: 'option2', label: 'Hest 2', colorClass: 'bg-green-500' },
    { value: 'option3', label: 'Hest 3', colorClass: 'bg-blue-500' },
    { value: 'option4', label: 'Hest 4', colorClass: 'bg-yellow-400' },
  ];

  // On option click, set selected option and close dropdown
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className={`relative top-14 mb-1 h-16 w-24 rounded-full text-lg font-bold text-black ${
          selectedOption?.colorClass || 'bg-slate-200'
        }`} // Sets background color equal to selected option color
      >
        {selectedOption ? selectedOption.label : 'Hest'}
      </button>

      {isDropdownOpen && (
        <ul className="absolute mt-1 w-24 rounded-full border border-t-0 bg-white py-1 text-black">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className={`cursor-pointer px-4 py-2 ${option.colorClass} hover:bg-gray-200`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
