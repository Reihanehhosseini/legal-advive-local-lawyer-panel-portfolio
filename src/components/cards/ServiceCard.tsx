import clsx from 'clsx';
import type { ServiceCardProps } from './ServiceCard.types';
import Toggle from '../ui/toggles/Toggle';

export default function ServiceCard({
  title,
  icon,
  statusLabel,
  statusVariant = 'inactive',

  price,
  currency = 'تومان',
  commissionPercent,

  preConsultActive,
  isActive,

  onTogglePreConsult,
  onToggleActive,

  onManageOffers,
  onHelpClick,
}: ServiceCardProps) {
  return (
    <div className="col-span-4 sm:col-span-2 lg:col-span-1 border border-global-3 rounded-2xl py-2.5 px-3">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-2 mb-5">
        <div className="min-w-11 h-11 bg-global-21 rounded-2xl flex items-center justify-center">
          {icon}
        </div>

        <p>{title}</p>

        <span
          className={clsx(
            'text-xs font-bold px-2 py-1 rounded-full',
            statusVariant === 'active'
              ? 'bg-green-100 text-green-600'
              : 'bg-global-11 text-text-secondary',
          )}
        >
          {statusLabel}
        </span>
      </div>

      {/* Price & Commission */}
      <div className="px-2 flex flex-col gap-y-3 border-b border-global-3 pb-3 mb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary">قیمت</span>
          <p className="text-base font-bold">
            {price.toLocaleString()}
            <span className="text-[10px] text-text-secondary mr-1">
              {currency}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-text-secondary">کارمزد</span>
          <p className="text-base font-bold">{commissionPercent}%</p>
        </div>
      </div>

      {/* Toggles */}
      <div className="flex flex-col gap-y-3 mb-3">
        <div className="flex items-center justify-between">
          <p>مشاوره پیش از خرید</p>
          <Toggle
            checked={preConsultActive}
            onChange={(e) => onTogglePreConsult(e.target.checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <p>فعال کردن</p>
          <Toggle
            checked={isActive}
            onChange={(e) => onToggleActive(e.target.checked)}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center justify-center gap-y-3">
        <button
          onClick={onManageOffers}
          className="bg-global-5 text-text-secondary rounded-full py-1.5 px-4"
        >
          مدیریت پیشنهادها
        </button>

        <button
          onClick={onHelpClick}
          className="flex items-center text-accent-blue gap-x-0.5"
        >
          راهنما
        </button>
      </div>
    </div>
  );
}
