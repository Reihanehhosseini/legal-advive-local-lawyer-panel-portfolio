import { ResponsiveDataTable } from "../../components/tables";
import type { DataGridColumn } from "../../components/tables/DataTable/DataTable.types";
import { FilterIcon } from "../../components/ui/icons";
import { SearchInput } from "../../components/ui/inputs";

type OrderType = {
  title: number;
  user: string;
  description: string;
  price: number;
  orderStatus: string;
  priceStatus: string;
  date: string;
};

const data: OrderType[] = [
  {
    title: 1234,
    user: "میلاد امینی",
    description: "شرح پروژه",
    price: 124500,
    orderStatus: "وضعیت سفارش",
    priceStatus: "وضعیت مالی",
    date: "۱۴۰۱.۲.۶",
  },
  {
    title: 1234,
    user: "میلاد امینی",
    description: "شرح پروژه",
    price: 124500,
    orderStatus: "وضعیت سفارش",
    priceStatus: "وضعیت مالی",
    date: "۱۴۰۱.۲.۶",
  },
  {
    title: 1234,
    user: "میلاد امینی",
    description: "شرح پروژه",
    price: 124500,
    orderStatus: "وضعیت سفارش",
    priceStatus: "وضعیت مالی",
    date: "۱۴۰۱.۲.۶",
  },
];

const dataColumns: DataGridColumn<OrderType>[] = [
  {
    key: "title",
    header: "شماره",
  },
  {
    key: "user",
    header: "کاربر",
  },
  {
    key: "description",
    header: "شرح",
  },
  {
    key: "price",
    header: "مبلغ(تومان)",
  },
  {
    key: "orderStatus",
    header: "وضعیت سفارش",
  },
  {
    key: "priceStatus",
    header: "وضعیت مالی",
  },
  {
    key: "date",
    header: "تاریخ ثبت",
  },
];

export default function OrdersPage() {
  return (
    <main className="grid gap-8 px-4">
      <h1 className="text-md lg:text-lg">سفارش ها</h1>
      <div className="flex w-full justify-between lg:justify-start lg:gap-2.5">
        <SearchInput inputClassName={"lg:min-w-96 min-w-60"}/>
        <button className="bg-global-5 relative rounded-full py-1 px-2 gap-4 flex items-center">
          <FilterIcon color="white" className="w-4 h-4 lg:w-5 lg:h-5"/>
          <span className="text-white text-xs lg:text-sm">فیلتر ها</span>
          <div
            className={`w-7 h-7 relative rounded-full text-lg bg-white text-global-5 flex items-center justify-center`}
          >
            <span className="text-xs lg:text-xl">0</span>
          </div>
        </button>
      </div>
      <ResponsiveDataTable<OrderType>
        data={data}
        columns={dataColumns}
      />
    </main>
  );
}
