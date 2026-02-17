import React from 'react';
import { SearchInput } from '../../components/ui/inputs';
import {
  HiOutlineAdjustments,
  HiOutlineAnnotation,
  HiOutlineUserGroup,
} from 'react-icons/hi';

export default function EvaluationRequests() {
  return (
    <div className="border border-global-3 h-full! rounded-2xl ms-0 lg:ms-12 flex flex-col gap-y-6 px-5.5 py-4">
      <div className="flex flex-col gap-y-2.5">
        <p className="font-bold text-primary">لیست درخواست‌های ارزیابی</p>
        <div className="flex items-center gap-x-2.5">
          <SearchInput />
          <button
            type="button"
            className="flex items-center gap-x-1 text-white bg-global-5 py-1.5 px-3 rounded-full"
          >
            <HiOutlineAdjustments size={20} />
            <span>فیلتر ها</span>
          </button>
        </div>
      </div>

      {/* List */}

      <div className="p-6 border border-global-3 rounded-2xl flex justify-between gap-x-4">
        <div className="bg-global-14 text-white font-bold text-2xl min-w-16 h-16 flex items-center justify-center rounded-full">
          <span>آ</span>
        </div>
        <div className="grid gap-y-3">
          <p className="text-base font-bold">آزاد صادقی</p>
          <p className="text-sm font-light">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          <p className="text-xs font-normal text-text-secondary">
            ویرایش: 5 دقیقه پیش ثبت :10 دقیقه پیش
          </p>
        </div>

        <div className="flex flex-col gap-y-2 text-nowrap">
          <span className="bg-global-12 h-fit">کیفری, سرقت</span>
          <div className="flex items-center gap-x-1">
            <HiOutlineAnnotation size={20} />
            <span className="text-xs">ارزیابی</span>
            <span className="min-w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
              3
            </span>
          </div>
          <div className="flex items-center gap-x-1">
            <HiOutlineUserGroup size={20} />
            <span className="text-xs">ارزیابی عمومی</span>
          </div>
          <button
            type="button"
            className="py-2 px-4 bg-global-5 rounded-full text-white"
          >
            مشاهده
          </button>
        </div>
      </div>
    </div>
  );
}
