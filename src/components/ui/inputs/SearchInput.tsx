import React from 'react';
import { SearchIcon } from '../icons';

type SearchInputProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  icon?: React.ReactNode;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'جستجو ...',
  type = 'text',
  className = '',
  inputClassName = '',
  iconClassName = '',
  icon,
}) => {
  return (
    <div className={`relative ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-global-4 py-2 px-4 rounded-full min-w-80 outline-0
          hover:ring hover:ring-secondary
          focus:ring-2 focus:ring-global-5
          ${inputClassName}`}
      />

      {icon ? (
        <div
          className={`w-7 h-7 rounded-full bg-global-5 text-white flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 ${iconClassName}`}
        >
          {icon}
        </div>
      ) : (
        <div
          className={`w-7 h-7 rounded-full bg-global-5 text-white flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2`}
        >
          <SearchIcon className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
