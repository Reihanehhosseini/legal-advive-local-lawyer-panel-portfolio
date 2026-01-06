import clsx from 'clsx';
import type { DataGridProps } from './DataGridType';

function DataGrid<T extends object>({
  columns,
  data,
  className,
  headerClassName,
  bodyClassName,
  rowClassName,
  emptyState,
}: DataGridProps<T>) {
  const totalCols = columns.reduce((sum, col) => sum + (col.colSpan ?? 1), 0);

  return (
    <div className={clsx('w-full', className)}>
      {/* ================= Header ================= */}
      <div
        className={clsx(
          'grid bg-global-8 py-3 rounded-t-2xl px-4 text-xs font-bold text-text-secondary',
          headerClassName
        )}
        style={{
          gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((col) => (
          <div
            key={String(col.key)}
            className={clsx('content-center', col.headerClassName)}
            style={{ gridColumn: `span ${col.colSpan ?? 1}` }}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* ================= Body ================= */}
      <div className={bodyClassName}>
        {data.length === 0 && (
          <div className="p-6 text-center text-sm text-text-muted">
            {emptyState ?? 'داده‌ای برای نمایش وجود ندارد'}
          </div>
        )}

        {data.map((row, rowIndex) => {
          const rowClasses =
            typeof rowClassName === 'function'
              ? rowClassName(row, rowIndex)
              : rowClassName;

          return (
            <div
              key={rowIndex}
              className={clsx(
                'grid p-4 text-text-secondary',
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-global-4',
                rowClasses
              )}
              style={{
                gridTemplateColumns: `repeat(${totalCols}, minmax(0, 1fr))`,
              }}
            >
              {columns.map((col) => {
                const value = row[col.key];

                const cellClass =
                  typeof col.cellClassName === 'function'
                    ? col.cellClassName(row, rowIndex)
                    : col.cellClassName;

                return (
                  <div
                    key={String(col.key)}
                    className={clsx('content-center', cellClass)}
                    style={{ gridColumn: `span ${col.colSpan ?? 1}` }}
                  >
                    {col.render
                      ? col.render(value, row, rowIndex)
                      : (value as React.ReactNode)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataGrid;
