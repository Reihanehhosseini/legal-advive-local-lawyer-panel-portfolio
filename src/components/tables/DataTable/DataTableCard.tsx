import clsx from 'clsx';
import type { DataGridColumn } from './DataTable.types';

type DataGridCardProps<T extends object> = {
  columns: DataGridColumn<T>[];
  row: T;
  index: number;
};

function DataGridCard<T extends object>({
  columns,
  row,
  index,
}: DataGridCardProps<T>) {
  return (
    <div
      className={clsx(
        'block lg:hidden rounded-2xl border border-global-3 p-4 space-y-3 mb-4',
        index % 2 === 0 ? 'bg-white' : 'bg-global-4'
      )}
    >
      {columns.map((col) => {
        const value = row[col.key];

        const content = col.render
          ? col.render(value, row, index)
          : (value as React.ReactNode);

        return (
          <div
            key={String(col.key)}
            className="flex items-center justify-between gap-2"
          >
            <span className="text-xs font-bold text-text-secondary">
              {col.header}
            </span>

            <div className="text-sm text-text-secondary text-end">
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DataGridCard;
