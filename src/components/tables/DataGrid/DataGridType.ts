import React from 'react';

type CellRenderer<T, K extends keyof T> = (
  value: T[K],
  row: T,
  rowIndex: number
) => React.ReactNode;

export type DataGridColumn<T, K extends keyof T = keyof T> = {
  key: K;
  header?: React.ReactNode;
  colSpan?: number;

  headerClassName?: string;
  cellClassName?: string | ((row: T, rowIndex: number) => string);

  render?: CellRenderer<T, K>;
};

export type DataGridProps<T extends object> = {
  columns: DataGridColumn<T>[];
  data: T[];

  className?: string;
  headerClassName?: string;
  bodyClassName?: string;

  rowClassName?: string | ((row: T, rowIndex: number) => string);

  emptyState?: React.ReactNode;
};
