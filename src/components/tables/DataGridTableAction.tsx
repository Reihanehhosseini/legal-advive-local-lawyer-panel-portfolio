import { EyeIcon } from '../ui/icons';

type TableColumn = {
  key: string;
  label: string;
  colSpan: number;
};

type TableRow = {
  [key: string]: React.ReactNode;
};

type DataGridTableActionProps = {
  columns: TableColumn[];
  rows: TableRow[];
  className?: string;
};

const DataGridTableAction: React.FC<DataGridTableActionProps> = ({
  columns,
  rows,
  className,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Header */}
      <div
        className={`grid grid-cols-12 bg-global-8 py-1.5 px-4 text-xs font-bold text-text-secondary`}
      >
        {columns.map((col) => (
          <div
            key={col.key}
            className={`col-span-${col.colSpan} content-center`}
          >
            {col.label}
          </div>
        ))}
        <p className="col-span-2 text-center">اعمال</p>
      </div>

      {/* Rows */}
      {rows.map((row, index) => {
        const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-global-4';

        return (
          <div
            key={index}
            className={`grid grid-cols-12 px-4 py-2 text-text-secondary ${bgClass}`}
          >
            {columns.map((col) => (
              <div
                key={col.key}
                className={`col-span-${col.colSpan} content-center`}
              >
                {row[col.key]}
              </div>
            ))}
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                className="flex items-center gap-x-2 text-center border border-primary text-primary px-4 py-2 rounded-lg bg-global-12 hover:text-secondary hover:border-secondary transition-all duration-200 ease-linear"
              >
                <EyeIcon />
                <span>نمایش</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataGridTableAction;
