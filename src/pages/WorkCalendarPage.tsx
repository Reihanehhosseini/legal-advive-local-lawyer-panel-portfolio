// * imports
import {
  HiOutlineCalendar,
  HiOutlinePencilAlt,
  HiOutlinePhone,
  HiOutlineShieldExclamation,
  HiOutlineTrash,
} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function WorkCalendarPage() {
  // ! hooks
  const navigate = useNavigate();

  // ! Handlers
  const handleEditWorkCalendar = () => {
    navigate('/work-calendar/edit');    
  };
  // ! JSX
  return (
    <div>
      <div className="flex items-center gap-x-1 text-global-23 bg-global-24 p-2.5 rounded-full mb-9">
        <HiOutlineShieldExclamation size={24} />
        <p>
          لطفاً یکی از سوابق تحصیلی خود را ویرایش کرده و آن را به‌عنوان آخرین
          سابقه تحصیلی ثبت نمایید، یا در صورت لزوم آخرین مدرک تحصیلی خود را
          ایجاد کنید.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6">
        <div className="py-6 col-span-2 lg:col-span-1 border border-global-3 rounded-2xl px-5 mb-6 lg:mb-0">
          {/* head */}
          <div className="flex items-center justify-between">
            <p>لورم ایپسوم متن</p>
            <div className="flex items-center gap-x-2 mb-4">
              <div className="min-w-8 h-8 bg-global-25 text-accent-mint rounded-full flex items-center justify-center">
                <HiOutlinePhone size={24} />
              </div>
              <span>مشاوره تلفنی</span>
            </div>
          </div>
          {/* Times */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="col-span-2 lg:col-span-1 border border-global-3 rounded-2xl py-1 px-2 min-h-25 relative">
              <p className="text-center text-xs mb-1">شنبه</p>

              <span className="py-.5 ps-2.5 pe-1.6 bg-global-12 border-r-3 border-primary rounded-sm">
                10:30 تا 11:30
              </span>

              <span className="absolute bottom-4 right-1.5 py-.5 px-2.5 bg-global-26 border-r-3 border-accent-orange rounded-sm">
                تعطیل
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center lg:justify-end gap-x-3">
            <button
              type="button"
              className="flex items-center gap-x-1.5 py-1 px-3 bg-global-16 rounded-full text-global-19"
            >
              <HiOutlineTrash size={20} />
              <span>حذف</span>
            </button>
            <button
              type="button"
              onClick={handleEditWorkCalendar}
              className="flex items-center gap-x-1.5 py-1 px-3 bg-global-4 rounded-full"
            >
              <HiOutlinePencilAlt size={20} />
              <span>ویرایش</span>
            </button>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 min-h-50 bg-global-4 rounded-2xl dashed-box flex flex-col gap-y-2.5 items-center justify-center text-text-secondary">
          <HiOutlineCalendar size={52} />
          <p>افزودن تقویم کاری</p>
        </div>
      </div>
    </div>
  );
}
