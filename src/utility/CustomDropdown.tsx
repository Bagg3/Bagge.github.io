import { useState } from 'react';

interface Option {
  value: string;
  label: string;
  colorClass: string;
  icon?: string;
}

type DropDownProps = {
  menuItems: Option[];
};

function CustomDropdown({ menuItems }: DropDownProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null); // Initialize as null

  const options = menuItems;

  // On option click, set selected option and close dropdown
  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!isDropdownOpen)}
        className={`relative top-0 mb-1 h-16 w-24 rounded-full text-lg font-bold text-black ${
          selectedOption?.colorClass || 'bg-slate-200'
        }`} // Sets background color equal to selected option color
      >
        {selectedOption ? selectedOption.label : 'Hest'}
      </button>

      {isDropdownOpen && (
        <ul className="absolute z-20 mt-1 w-28 border-t-0 py-1 text-black">
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
