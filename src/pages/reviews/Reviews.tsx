import React from "react";
import DataGrid from "../../components/tables/DataTable/DataGrid";
import type { DataGridColumn } from "../../components/tables/DataTable/DataGridType";

interface CommentRow {
  view: string;
  relatedTo: string;
  status: "active" | "pending" | "rejected";
}
export default function Reviews() {
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
  return (
    <div className="w-full lg:px-7">
      <DataGrid<CommentRow>
        columns={columns}
        data={data}
        className="rounded-2xl border border-global-6"
        emptyState="دیدگاهی ثبت نشده است"
      />
    </div>
  );
}
