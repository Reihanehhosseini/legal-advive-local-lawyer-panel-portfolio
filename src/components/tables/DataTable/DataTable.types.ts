export type DataGridColumn<T> = {
  key: keyof T;
  header: React.ReactNode;
  colSpan?: number;
  headerClassName?: string;
  cellClassName?: string | ((row: T, index: number) => string);
  render?: (value: T[keyof T], row: T, index: number) => React.ReactNode;
};
