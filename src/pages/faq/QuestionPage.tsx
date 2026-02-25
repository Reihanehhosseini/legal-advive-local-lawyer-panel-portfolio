import DataGrid from '../../components/tables/DataTable/DataGrid';
import { StatusBadge } from '../../components/ui/badges/StatusBadge';
import { FilterIcon } from '../../components/ui/icons';
import { SearchInput } from '../../components/ui/inputs';

interface QuestionDataTypes {
  title: string;
  status: 'Answered' | 'pending' | 'published' | 'rejected';
  categorie: string;
  create_date: string;
}

const questions: QuestionDataTypes[] = [
  {
    title: 'شکایت به خاطر استفاده از ملک تجاری ...',
    status: 'Answered',
    categorie: '- بدون دسته‌بندی -',
    create_date: '2025-01-12',
  },
  {
    title: 'لورم ایپسوم ماسا مورد استفاده قرار گیرد.',
    status: 'published',
    categorie: 'وصول مطالبات',
    create_date: '2025-01-18',
  },
];

export default function QuestionPage() {
  return (
    <div className="border border-global-3 rounded-2xl min-h-screen px-5 py-4">
      <p className="text-primary font-bold text-base mb-4">پرسش ها</p>
      <div className="flex items-center gap-x-2.5 mb-6">
        <SearchInput onChange={(e) => console.log(e.target.value)} />
        <button
          type="button"
          className="px-3 py-2 bg-global-5 flex items-center gap-1 rounded-full text-white"
        >
          <FilterIcon />
          <span>فیلتر ها</span>
          <span className="inline-block w-5 h-5 bg-white rounded-full text-global-5 ms-4">
            0
          </span>
        </button>
      </div>

      <DataGrid<QuestionDataTypes>
        className="hidden lg:block"
        data={questions}
        columns={[
          {
            key: 'title',
            header: 'عنوان پرسش',
            colSpan: 3,
          },
          {
            key: 'status',
            header: 'وضعیت پرسش',
            colSpan: 3,
            render: (v) => <StatusBadge status={v} />,
          },
          {
            key: 'categorie',
            header: 'دسته‌بندی',
            colSpan: 2,
          },
          {
            key: 'create_date',
            header: 'تاریخ ثبت',
            colSpan: 1,
            headerClassName: 'text-end',
            cellClassName: 'text-end',
            render: (v) => new Date(v).toLocaleDateString('fa-IR'),
          },
        ]}
      />
    </div>
  );
}
