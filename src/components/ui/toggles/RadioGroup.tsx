import React, { useState } from 'react';

interface RadioGroupProps {
    options: { value: string; label: string }[];
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, defaultValue = '', onChange }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (value: string) => {
        setSelectedValue(value);
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="flex items-center justify-between w-full">
            {options.map((option) => (

                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-gray-700 font-medium text-xs">{option.label}</span>
                    <input
                        type="radio"
                        className="sr-only peer"
                        name="gender"
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => handleChange(option.value)}
                    />
                    <div className="relative w-4.5 h-4.5 rounded-full bg-global-11 peer-checked:bg-primary z-10">
                        <span className="bg-global-11 w-1.5 h-1.5 inline-block rounded-full absolute inset-0 m-auto"></span>
                    </div>
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;