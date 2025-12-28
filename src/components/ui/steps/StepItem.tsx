import clsx from 'clsx';

interface StepItemProps {
  stepNumber: number | string;
  title: string;
  description: string;
  containerClassName?: string;
  indicatorWrapperClassName?: string;
  indicatorClassName?: string;
  lineClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;

  showLine?: boolean;
}

export function StepItem({
  stepNumber,
  title,
  description,

  containerClassName,
  indicatorWrapperClassName,
  indicatorClassName,
  lineClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,

  showLine = true,
}: StepItemProps) {
  return (
    <div className={clsx('flex gap-x-4 max-w-4xl', containerClassName)}>
      <div className={clsx('relative', indicatorWrapperClassName)}>
        <span
          className={clsx(
            'inline-block text-xs lg:text-lg min-w-4 h-4 lg:min-w-8 lg:h-8 bg-secondary rounded-full text-center content-center text-white font-bold',
            indicatorClassName
          )}
        >
          {stepNumber}
        </span>

        {showLine && (
          <span
            className={clsx(
              'w-0.5 inline-block h-[80%] lg:-[60%] bg-secondary absolute left-1/2 -translate-x-1/2 top-7 rounded-full lg:top-12',
              lineClassName
            )}
          />
        )}
      </div>

      <div className={clsx('grid gap-y-4', contentClassName)}>
        <p
          className={clsx(
            'text-xs lg:text-sm text-text-secondary font-bold',
            titleClassName
          )}
        >
          {title}
        </p>

        <p
          className={clsx(
            'text-text-secondary font-light',
            descriptionClassName
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
