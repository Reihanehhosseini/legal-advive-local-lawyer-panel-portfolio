interface ValueBadgeDisplayPropsType {
  label?: string | null;
  number?: string | number | null;
  unit?: boolean;
}

export default function ValueBadgeDisplay({
  label,
  number,
  unit = false,
}: ValueBadgeDisplayPropsType) {
  return (
    <div className="flex items-center gap-x-2.5">
      {label && <p>{label}</p>}
      {number && (
        <span className="min-w-7 h-7 inline-flex bg-primary rounded-full text-white items-center justify-center text-lg">
          {number}
        </span>
      )}
      {unit && <span className="text-xs text-text-secondary">تومان</span>}
    </div>
  );
}
