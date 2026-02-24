import { ResponsiveDataTable } from "../../components/tables";
import type { DataGridColumn } from "../../components/tables/DataTable/DataTable.types";
import { FilterIcon } from "../../components/ui/icons";
import { SearchInput } from "../../components/ui/inputs";

interface CommentRow {
  view: string;
  relatedTo: string;
  status: "active" | "pending" | "rejected";
}
const data: CommentRow[] = [
  {
    view: "عالی بود",
    relatedTo: "محصول A",
    status: "active",
  },
  {
    view: "نیاز به بهبود دارد",
    relatedTo: "مقاله React",
    status: "pending",
  },
  {
    view: "مناسب نبود",
    relatedTo: "خدمات پشتیبانی",
    status: "rejected",
  },
];
const columns: DataGridColumn<CommentRow>[] = [
  {
    key: "view",
    header: "دیدگاه",
  },
  {
    key: "relatedTo",
    header: "مربوط به",
  },
  {
    key: "status",
    header: "وضعیت",
    render: (value) => {
      if (value === "active") return "فعال";
      if (value === "pending") return "در انتظار";
      return "رد شده";
    },
  },
];
export default function Reviews() {
  return (
    <main className="grid gap-8 px-4">
      <h1 className="text-md lg:text-lg">سفارش ها</h1>
      <div className="flex w-full justify-between lg:justify-start lg:gap-2.5">
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
      <ResponsiveDataTable<CommentRow> data={data} columns={columns} />
    </main>
  );
}
