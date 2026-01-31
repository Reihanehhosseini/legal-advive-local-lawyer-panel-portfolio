import React, { useState } from 'react';

interface ToggleSwitchProps {
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleToggle}
          className="sr-only"
        />
        <div className="w-11 h-6 bg-global-5 rounded-full peer relative">
          <div
            className={`absolute top-1/2 -translate-y-1/2 left-0.5 bg-primary rounded-full h-4 w-4 transition-all ${
              checked ? 'translate-x-5' : ''
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
