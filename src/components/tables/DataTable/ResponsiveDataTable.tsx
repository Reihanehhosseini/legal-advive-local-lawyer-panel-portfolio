import clsx from 'clsx';
import DataGridCard from './DataTableCard';
import type { DataGridColumn } from './DataTable.types';
import DataGrid from './DataGrid';

type ResponsiveDataGridProps<T extends object> = {
  data: T[];
  columns: DataGridColumn<T>[];
  className?: string;
};

function ResponsiveDataGrid<T extends object>({
  data,
  columns,
  className,
}: ResponsiveDataGridProps<T>) {
  return (
    <>
      {/* ===== Desktop ===== */}
      <DataGrid<T>
        className={clsx('hidden lg:block', className)}
        data={data}
        columns={columns}
      />

      {/* ===== Mobile ===== */}
      <div className="block lg:hidden">
        {data.map((row, index) => (
          <DataGridCard<T>
            key={index}
            row={row}
            index={index}
            columns={columns}
          />
        ))}
      </div>
    </>
  );
}

export default ResponsiveDataGrid;
