import clsx from 'clsx';
import type { ReactNode } from 'react';

interface DashboardCardProps {
  icon?: ReactNode | null;
  text?: string | null;
  buttonText?: string | null;
  onClick?: () => void;
  className?: string;
}

export default function DashboardCard({
  icon = null,
  text = '',
  buttonText = '',
  onClick,
  className,
}: DashboardCardProps) {
  return (
    <div className={clsx(className, 'pb-16 relative')}>
      {icon}
      <p className="text-center text-base w-full mb-7">{text}</p>
      <button
        type="button"
        onClick={onClick}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[90%] bg-white py-1.5 rounded-full text-black flex items-center justify-center gap-x-2"
      >
        {buttonText}
      </button>
    </div>
  );
}
