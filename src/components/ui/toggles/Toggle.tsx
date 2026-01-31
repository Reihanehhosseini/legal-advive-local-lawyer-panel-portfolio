import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * Toggle Component
 */
export default function Toggle({
  label,
  checked,
  onChange,
  disabled,
  className,
  ...props
}: ToggleProps) {
  return (
    <label
      className={clsx(
        'inline-flex items-center gap-2 cursor-pointer select-none',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
    >
      {/* Hidden Checkbox */}
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />

      {/* Toggle UI */}
      <div
        className={clsx(
          'w-11 h-6 rounded-full transition-colors',
          'border border-global-3 peer-checked:bg-global-5',
          "relative after:content-[''] after:absolute after:top-1 after:left-1",
          'after:w-4 after:h-4 after:bg-global-22 after:rounded-full after:transition-transform',
          'peer-checked:after:translate-x-5 peer-checked:after:bg-white peer-checked:border-none',
        )}
      />

      {/* Label text */}
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
}
