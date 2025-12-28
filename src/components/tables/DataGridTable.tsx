import clsx from 'clsx';

type TableColumn = {
  key: string;
  label: string;
  colSpan: number;
};

type TableRow = {
  [key: string]: React.ReactNode;
};

type DataGridTableProps = {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
};

const DataGridTable: React.FC<DataGridTableProps> = ({
  columns,
  rows,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div
        className={clsx(
          'grid grid-cols-12 bg-global-8 py-1.5 px-4 text-xs font-bold text-text-secondary'
        )}
      >
        {columns.map((col) => (
          <div
            key={col.key}
            className={clsx(`col-span-${col.colSpan}`, 'content-center')}
          >
            {col.label}
          </div>
        ))}
      </div>

      {/* Rows */}
      {rows.map((row, index) => {
        const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-global-4';

        return (
          <div
            key={index}
            className={clsx(
              'grid grid-cols-12 p-4 text-text-secondary',
              bgClass
            )}
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className={clsx(`col-span-${col.colSpan}`, 'content-center')}
              >
                {row[col.key]}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default DataGridTable;
