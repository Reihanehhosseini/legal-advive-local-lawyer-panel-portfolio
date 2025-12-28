import React from 'react';

interface QuestionCardProps {
  title: string;
  description: string;

  timeLabel: string;
  answersCount: number;
  viewsCount: number;

  onEdit?: () => void;
  onComments?: () => void;

  QuestionIcon: React.ReactNode;
  EyeIcon: React.ReactNode;
  EditIcon: React.ReactNode;
  CommentsIcon: React.ReactNode;

  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  description,
  timeLabel,
  answersCount,
  viewsCount,
  onEdit,
  onComments,
  QuestionIcon,
  EyeIcon,
  EditIcon,
  CommentsIcon,
  className = '',
}) => {
  return (
    <div
      className={`p-6 border border-global-3 rounded-2xl grid gap-y-5 lg:gap-y-7 mb-9 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between lg:pe-7">
        <div className="flex items-center gap-x-1 mb-4 lg:mb-0">
          {QuestionIcon}
          <p className="text-global-7 text-xs lg:text-sm font-bold">{title}</p>
        </div>

        <div className="flex items-center gap-x-7 font-light text-xs ps-6 lg:ps-0">
          <p>{timeLabel}</p>
          <p>{answersCount} پاسخ</p>
          <div className="flex items-center gap-x-1">
            <span>{viewsCount}</span>
            {EyeIcon}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-text-secondary font-light">{description}</p>

      {/* Footer */}
      <div className="border-t border-global-3 pt-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="flex items-center gap-x-2"
            onClick={onEdit}
          >
            {EditIcon}
            <span className="text-xs">ویرایش</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-x-2"
            onClick={onComments}
          >
            {CommentsIcon}
            <span className="text-xs">دیدگاه ها</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
