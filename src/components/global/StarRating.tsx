import clsx from 'clsx';
import { StarIcon } from '../ui/icons';

interface StarRatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  size?: number;
}

export default function StarRating({
  value = 0,
  max = 5,
  onChange,
  size = 20,
}: StarRatingProps) {
  const isReadOnly = typeof onChange !== 'function';

  return (
    <div className="flex flex-row-reverse gap-1">
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= value;

        return (
          <button
            key={starValue}
            type="button"
            disabled={isReadOnly}
            onClick={() => onChange?.(starValue)}
            className={clsx(
              'transition-transform',
              isReadOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
            )}
          >
            <StarIcon
              width={size}
              className={clsx(
                isActive ? 'text-secondary' : 'text-text-secondary'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
