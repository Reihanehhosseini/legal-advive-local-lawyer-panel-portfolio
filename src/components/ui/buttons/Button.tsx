import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secundary';
  border?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  border = true,
  className,
}: ButtonPropsType) {
  return (
    <button
      className={clsx(
        'rounded-full transition-all duration-200 ease-linear py-2 px-8 w-full',
        className,
        { 'border border-global-3 hover:bg-secondary': border },
        variant === 'primary'
          ? 'bg-primary text-white hover:bg-primary'
          : variant === 'secundary'
          ? 'bg-secondary text-white'
          : null
      )}
    >
      {children}
    </button>
  );
}
