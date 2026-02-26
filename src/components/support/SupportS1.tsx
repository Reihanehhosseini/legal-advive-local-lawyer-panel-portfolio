import { FilterIcon } from "../../components/ui/icons";
import { SearchInput } from "../../components/ui/inputs";
import { ResponsiveDataTable } from "../../components/tables";
import { HiPlusCircle } from "../../assets/icons/icons";
import { type DataGridColumn } from "../../components/tables/DataTable/DataTable.types";
import { type supportValue } from "../../types/formValues/FormValues";
interface supportType {
  unit: string;
  messages: string;
  supportStatus: string;
  attachment: string;
  registrationDate: string;
}
const data: supportType[] = [
  {
    unit: "لورم اسپینوم",
    messages: "لورم ایپسوم ماسا مورد استفاده قرار گیرد.",
    supportStatus: "بسته شده",
    attachment: "1401.2.6",
    registrationDate: "1401.2.6",
  },
  {
    unit: "لورم اسپینوم",
    messages: "لورم ایپسوم ماسا مورد استفاده قرار گیرد.",
    supportStatus: "بسته شده",
    attachment: "1401.2.6",
    registrationDate: "1401.2.6",
  },
  {
    unit: "لورم اسپینوم",
    messages: "لورم ایپسوم ماسا مورد استفاده قرار گیرد.",
    supportStatus: "بسته شده",
    attachment: "1401.2.6",
    registrationDate: "1401.2.6",
  },
];
const columns: DataGridColumn<supportType>[] = [
  {
    key: "unit",
    header: "عنوان",
  },
  {
    key: "messages",
    header: "پیام",
  },
  {
    key: "supportStatus",
    header: "وضعیت پشتیبانی",
  },
  {
    key: "attachment",
    header: "فایل پیوست",
  },
  {
    key: "registrationDate",
    header: "تاریخ ثبت",
  },
];
interface SupportS1Props {
  addRequest: () => void;
  allValues: supportValue[]
}
export default function SupportS1({ addRequest, allValues }: SupportS1Props) {
  return (
    <main className="grid gap-8 px-4">
      <h1 className="text-md lg:text-lg">پشتیبانی</h1>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-between lg:justify-start lg:gap-2.5">
          <SearchInput inputClassName={"lg:min-w-96 min-w-60"} />
          <button className="bg-global-5 relative rounded-full py-1 px-2 gap-4 flex items-center">
            <FilterIcon color="white" className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-white text-xs lg:text-sm">فیلتر ها</span>
            <div
              className={`w-7 h-7 relative rounded-full text-lg bg-white text-global-5 flex items-center justify-center`}
            >
              <span className="text-xs lg:text-xl">0</span>
            </div>
          </button>
        </div>
        <button
          className="flex px-5 py-2 bg-primary text-white rounded-full items-center gap-2.5"
          onClick={addRequest}
        >
          <HiPlusCircle className="w-5 h-5" />
          درخواست جدید
        </button>
      </div>
      <ResponsiveDataTable<supportType> data={data} columns={columns} />
    </main>
  );
}
