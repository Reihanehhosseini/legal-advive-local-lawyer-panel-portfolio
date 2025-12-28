'use client';

import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { ErrorMessage } from 'formik';

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name?: string;
  label?: string;
  options: Option[];
  value?: string;
  placeholder?: string;
  onChange: (value: string) => void;

  showError?: boolean;
  errorComponent?: ReactNode;

  inputClassName?: string;
  wrapperClassName?: string;
  dropdownClassName?: string;
  height?: string;
  disabled?: boolean;
  padding?: string;
}

export default function MotionSelectInput({
  name,
  label,
  padding,
  options,
  value,
  placeholder = 'انتخاب کنید',
  onChange,
  showError = false,
  errorComponent,
  inputClassName = '',
  wrapperClassName = '',
  dropdownClassName = '',
  height,
  disabled,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const matched = options.find((opt) => opt.value === value) || null;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelected(matched);
    } else {
      setSelected(null);
    }
  }, [value, options]);

  const handleSelect = (opt: Option) => {
    setSelected(opt);
    onChange(opt.value);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRemoveSelect = () => {
    setSelected(null);
    setOpen(false);
  };

  return (
    <div className={`w-full relative ${wrapperClassName}`} ref={ref}>
      {label && (
        <label className="block mb-1 text-xs md:text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen((prev) => !prev)}
          className={`
          flex items-center justify-between w-full
           rounded-lg border border-global-3 bg-global-4 ${
             padding ? padding : 'py-2.5 px-4'
           } text-start
          focus:outline-none focus:ring-2 focus:ring-primary/40 text-xs md:text-sm
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${inputClassName}
        `}
        >
          <span
            className={`text-xs ${
              selected ? 'text-gray-900' : 'text-text-secondary'
            }`}
          >
            {selected ? selected.label : placeholder}
          </span>

          <ChevronDown
            size={18}
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {selected && (
          <button
            type="button"
            onClick={handleRemoveSelect}
            className="absolute top-1/2 -translate-y-1/2 left-10 z-10 hover:text-red-600"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={`
              absolute z-20 mt-1 w-full
              bg-white border border-global-3 rounded-md shadow-lg overflow-auto text-sm
              ${height ?? 'max-h-60'}
              ${dropdownClassName}
            `}
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Error */}
      {showError &&
        name &&
        (errorComponent ? (
          errorComponent
        ) : (
          <p className="mt-1 text-xs text-red-500">
            <ErrorMessage name={name} />
          </p>
        ))}
    </div>
  );
}
