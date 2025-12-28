import clsx from 'clsx';

interface StatusBadgeProps {
  noDot?: boolean;
  type?: 'text' | 'background';
  className?: string | null;
  status: 'pending' | 'Answered' | 'published' | 'rejected' | string;
}

const statusColors: Record<StatusBadgeProps['status'], string> = {
  pending: 'text-yellow-600',
  Answered: 'text-green-600',
  published: 'text-green-900',
  rejected: 'text-red-600',
};
const statusBgColors: Record<StatusBadgeProps['status'], string> = {
  pending: 'bg-yellow-600 text-white',
  Answered: 'bg-green-600 text-white',
  published: 'bg-green-900 text-white',
  rejected: 'bg-red-600 text-white',
};
const statusColorsDot: Record<StatusBadgeProps['status'], string> = {
  pending: 'bg-yellow-600',
  Answered: 'bg-green-600',
  published: 'bg-green-900',
  rejected: 'bg-red-600',
};

const statusLabels: Record<StatusBadgeProps['status'], string> = {
  pending: 'در انتظار برسی',
  Answered: 'پاسخ داده شده',
  published: 'منتشر شده',
  rejected: 'رد شده',
};

export const StatusBadge = ({
  status,
  noDot = false,
  type = 'text',
  className = null,
}: StatusBadgeProps) => {
  return (
    <span
      className={clsx(
        `text-xs inline-flex items-center ${className}`,
        type === 'text'
          ? statusColors[status]
          : `${statusBgColors[status]} px-3 py-1 rounded-full`
      )}
    >
      {!noDot && type !== 'background' && (
        <span
          className={clsx(statusColorsDot[status], 'w-2 h-2 rounded-full me-1')}
        ></span>
      )}
      {statusLabels[status]}
    </span>
  );
};
