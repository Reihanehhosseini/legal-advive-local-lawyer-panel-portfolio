// ======================================================================================================|
// ========================================>Types<=======================================================|

import { HiOutlineCalendar } from 'react-icons/hi';
import { MotionSelect, ValueBadgeDisplay } from '../components';
import type { DataGridColumn } from '../components/tables/DataTable/DataTable.types';
import ResponsiveDataGrid from '../components/tables/DataTable/ResponsiveDataTable';
import { StatusBadge } from '../components/ui/badges/StatusBadge';

// ======================================================================================================|
interface DataType {
  title: string;
  description: string;
  price: string;
  status: string;
  financeStatus: string;
  create_date: string;
}

export default function DashboardPage() {
  // ======================================================================================================|
  // ========================================>Static Data<=================================================|
  // ======================================================================================================|

  const data: DataType[] = [
    {
      title: '1234',
      description: 'لورم ایپسوم ماسا مورد استفاده قرار گیرد.',
      price: '800,000',
      status: 'pending',
      financeStatus: 'وضعیت مالی',
      create_date: '2025-01-18',
    },
    {
      title: '1234',
      description: 'لورم ایپسوم ماسا مورد استفاده قرار گیرد.',
      price: '800,000',
      status: 'pending',
      financeStatus: 'وضعیت مالی',
      create_date: '2025-01-18',
    },
  ];

  const dataColumns: DataGridColumn<DataType>[] = [
    {
      key: 'title',
      header: 'شماره',
      colSpan: 2,
    },
    {
      key: 'description',
      header: 'شرح',
      colSpan: 3,
      cellClassName: 'line-clamp-1',
    },
    {
      key: 'price',
      header: 'مبلغ (تومان)',
      colSpan: 2,
    },
    {
      key: 'status',
      header: 'وضعیت سفارش',
      colSpan: 2,
      render: (v) => <StatusBadge status={v} />,
    },
    {
      key: 'financeStatus',
      header: 'وضعیت مالی',
      colSpan: 2,
    },
    {
      key: 'financeStatus',
      header: 'نوع سفارش',
      colSpan: 2,
    },
    {
      key: 'financeStatus',
      header: 'تعداد سفارش',
      colSpan: 2,
    },
    {
      key: 'create_date',
      header: 'تاریخ ثبت',
      colSpan: 2,
      headerClassName: 'text-end',
      cellClassName: 'text-end',
      render: (v) => new Date(v).toLocaleDateString('fa-IR'),
    },
  ];

  // ======================================================================================================|
  // ========================================>JSX<=========================================================|
  // ======================================================================================================|
  return (
    <div className="px-4 pb-4">
      <p className="text-lg font-bold mb-5">میزکار من</p>
      <div className="border border-global-3 rounded-2xl p-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-x-6 w-full">
            <ValueBadgeDisplay label="مجموع درآمد" number={1} unit />
            <ValueBadgeDisplay label="تعداد سفارش" number={1} />
          </div>
          <MotionSelect
            onSelect={(v) => console.log(v)}
            selectedId={1}
            icon={
              <HiOutlineCalendar className="text-text-secondary" size={18} />
            }
            options={[
              { id: 1, key: 'یک', value: 'یک' },
              { id: 2, key: 'دو', value: 'دو' },
            ]}
          />
        </div>
        <ResponsiveDataGrid<DataType> data={data} columns={dataColumns} />
      </div>
    </div>
  );
}
